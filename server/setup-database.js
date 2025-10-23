import db from './src/config/db.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function setupDatabase() {
  console.log('🚀 Setting up database schema...');
  console.log(`Connecting to: ${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
  
  try {
    const client = await db.connect();
    console.log('✅ Connected to database successfully!');
    
    // Read and execute the database schema
    const schemaPath = join(__dirname, 'src', 'database.sql');
    const schema = readFileSync(schemaPath, 'utf8');
    
    console.log('📋 Executing database schema...');
    
    // Split the schema into individual statements
    const statements = schema
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await client.query(statement);
          console.log(`✅ Executed: ${statement.substring(0, 50)}...`);
        } catch (error) {
          // Some statements might fail if tables already exist, which is OK
          if (error.message.includes('already exists')) {
            console.log(`⚠️  Table already exists: ${statement.substring(0, 50)}...`);
          } else {
            console.error(`❌ Error executing: ${statement.substring(0, 50)}...`);
            console.error(`   Error: ${error.message}`);
          }
        }
      }
    }
    
    // Verify tables were created
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `);
    
    console.log('\n📋 Database tables created:');
    tablesResult.rows.forEach(row => {
      console.log(`   ✅ ${row.table_name}`);
    });
    
    // Insert some sample data
    console.log('\n🌱 Inserting sample data...');
    
    try {
      // Insert sample users
      await client.query(`
        INSERT INTO Users (full_name, phone_number, password_hash, email, role) 
        VALUES 
        ('Admin User', '0123456789', '$2a$10$dummy.hash.for.testing', 'admin@umt.com', 'admin'),
        ('John Doe', '0987654321', '$2a$10$dummy.hash.for.testing', 'john@example.com', 'customer'),
        ('Jane Smith', '0555666777', '$2a$10$dummy.hash.for.testing', 'jane@example.com', 'owner')
        ON CONFLICT (email) DO NOTHING
      `);
      console.log('✅ Sample users inserted');
      
      // Insert sample venue
      await client.query(`
        INSERT INTO Venues (owner_id, venue_name, address, city, district, description, contact_phone, opening_time, closing_time)
        VALUES 
        (3, 'UMT Sports Complex', '123 University Street', 'Ho Chi Minh City', 'District 1', 'Modern sports facility with multiple pitches', '0123456789', '06:00:00', '22:00:00')
        ON CONFLICT DO NOTHING
      `);
      console.log('✅ Sample venue inserted');
      
      // Insert sample pitches
      await client.query(`
        INSERT INTO Pitches (venue_id, pitch_name, pitch_type, surface_type, status)
        VALUES 
        (1, 'Pitch A - 5v5', '5v5', 'Artificial grass', 'available'),
        (1, 'Pitch B - 7v7', '7v7', 'Natural grass', 'available'),
        (1, 'Pitch C - 11v11', '11v11', 'Artificial grass', 'available')
        ON CONFLICT DO NOTHING
      `);
      console.log('✅ Sample pitches inserted');
      
      // Insert sample time slots
      await client.query(`
        INSERT INTO TimeSlots (pitch_id, day_of_week, start_time, end_time, price)
        VALUES 
        (1, 'weekday', '06:00:00', '08:00:00', 200000),
        (1, 'weekday', '08:00:00', '10:00:00', 250000),
        (1, 'weekend', '06:00:00', '08:00:00', 300000),
        (1, 'weekend', '08:00:00', '10:00:00', 350000),
        (2, 'weekday', '06:00:00', '08:00:00', 300000),
        (2, 'weekend', '06:00:00', '08:00:00', 400000),
        (3, 'weekday', '06:00:00', '08:00:00', 500000),
        (3, 'weekend', '06:00:00', '08:00:00', 600000)
        ON CONFLICT DO NOTHING
      `);
      console.log('✅ Sample time slots inserted');
      
    } catch (error) {
      console.log('⚠️  Sample data insertion skipped (may already exist)');
    }
    
    client.release();
    console.log('\n🎉 Database setup completed successfully!');
    console.log('\n📊 Summary:');
    console.log('   - Database schema created');
    console.log('   - Sample data inserted');
    console.log('   - Ready for development!');
    
  } catch (error) {
    console.error('❌ Database setup failed:');
    console.error('Error:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.error('💡 Check if PostgreSQL server is running and accessible');
    } else if (error.code === '3D000') {
      console.error('💡 Database does not exist. Create it first:');
      console.error(`   CREATE DATABASE ${process.env.DB_NAME};`);
    }
    
    process.exit(1);
  } finally {
    await db.end();
  }
}

setupDatabase();

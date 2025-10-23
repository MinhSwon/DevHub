import db from './src/config/db.js';
import 'dotenv/config';

async function testConnection() {
  console.log('🔄 Testing database connection...');
  console.log(`Host: ${process.env.DB_HOST}`);
  console.log(`Port: ${process.env.DB_PORT}`);
  console.log(`Database: ${process.env.DB_NAME}`);
  console.log(`User: ${process.env.DB_USER}`);
  
  try {
    // Test basic connection
    const client = await db.connect();
    console.log('✅ Database connection successful!');
    
    // Test a simple query
    const result = await client.query('SELECT NOW() as current_time, version() as postgres_version');
    console.log('📊 Database info:');
    console.log(`   Current time: ${result.rows[0].current_time}`);
    console.log(`   PostgreSQL version: ${result.rows[0].postgres_version}`);
    
    // Test if our database exists and is accessible
    const dbResult = await client.query('SELECT current_database() as db_name');
    console.log(`   Connected to database: ${dbResult.rows[0].db_name}`);
    
    // Check if tables exist
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `);
    
    if (tablesResult.rows.length > 0) {
      console.log('📋 Existing tables:');
      tablesResult.rows.forEach(row => {
        console.log(`   - ${row.table_name}`);
      });
    } else {
      console.log('⚠️  No tables found. You may need to run the database schema.');
    }
    
    client.release();
    console.log('✅ Connection test completed successfully!');
    
  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error('Error:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.error('💡 Possible solutions:');
      console.error('   - Check if PostgreSQL server is running');
      console.error('   - Verify host and port in .env file');
      console.error('   - Check firewall settings');
    } else if (error.code === '28P01') {
      console.error('💡 Authentication failed:');
      console.error('   - Check username and password in .env file');
    } else if (error.code === '3D000') {
      console.error('💡 Database does not exist:');
      console.error('   - Create the database first');
      console.error('   - Check database name in .env file');
    }
    
    process.exit(1);
  } finally {
    await db.end();
  }
}

testConnection();

import pkg from 'pg';
import 'dotenv/config';

const { Client } = pkg;

async function simpleTest() {
  console.log('🔄 Testing simple database connection...');
  console.log(`Host: ${process.env.DB_HOST}`);
  console.log(`Port: ${process.env.DB_PORT}`);
  console.log(`Database: ${process.env.DB_NAME}`);
  console.log(`User: ${process.env.DB_USER}`);
  
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionTimeoutMillis: 10000,
    ssl: false
  });

  try {
    console.log('⏳ Attempting to connect...');
    await client.connect();
    console.log('✅ Connection successful!');
    
    const result = await client.query('SELECT NOW() as current_time');
    console.log('📊 Current database time:', result.rows[0].current_time);
    
    const dbResult = await client.query('SELECT current_database() as db_name');
    console.log('📊 Connected to database:', dbResult.rows[0].db_name);
    
  } catch (error) {
    console.error('❌ Connection failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.error('💡 Connection refused - possible causes:');
      console.error('   - PostgreSQL server is not running');
      console.error('   - Wrong host/port');
      console.error('   - Firewall blocking connection');
    } else if (error.code === '28P01') {
      console.error('💡 Authentication failed - check username/password');
    } else if (error.code === '3D000') {
      console.error('💡 Database does not exist - create it first');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('💡 Connection timeout - possible causes:');
      console.error('   - Network issues');
      console.error('   - Server not responding');
      console.error('   - Firewall blocking connection');
    }
    
  } finally {
    await client.end();
    console.log('🔚 Connection closed');
  }
}

simpleTest();

import net from 'net';
import 'dotenv/config';

function testNetworkConnection() {
  console.log('🔄 Testing network connectivity...');
  console.log(`Host: ${process.env.DB_HOST}`);
  console.log(`Port: ${process.env.DB_PORT}`);
  
  const socket = new net.Socket();
  
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      socket.destroy();
      reject(new Error('Connection timeout after 10 seconds'));
    }, 10000);
    
    socket.connect(Number(process.env.DB_PORT), process.env.DB_HOST, () => {
      clearTimeout(timeout);
      console.log('✅ Network connection successful!');
      console.log('📊 Port is open and accessible');
      socket.destroy();
      resolve();
    });
    
    socket.on('error', (error) => {
      clearTimeout(timeout);
      console.error('❌ Network connection failed:');
      console.error('Error:', error.message);
      
      if (error.code === 'ECONNREFUSED') {
        console.error('💡 Connection refused - possible causes:');
        console.error('   - PostgreSQL server is not running on this host/port');
        console.error('   - Wrong port number');
        console.error('   - Service not listening on this port');
      } else if (error.code === 'ENOTFOUND') {
        console.error('💡 Host not found - check hostname/IP address');
      } else if (error.code === 'ETIMEDOUT') {
        console.error('💡 Connection timeout - possible causes:');
        console.error('   - Firewall blocking connection');
        console.error('   - Network routing issues');
        console.error('   - Server not responding');
      }
      
      reject(error);
    });
  });
}

async function runTest() {
  try {
    await testNetworkConnection();
    console.log('\n🎉 Network test passed! Database server is reachable.');
    console.log('💡 You can now try the database connection test.');
  } catch (error) {
    console.log('\n❌ Network test failed!');
    console.log('💡 Please check:');
    console.log('   1. PostgreSQL server is running on 172.16.2.2:54344');
    console.log('   2. Firewall allows connections to this port');
    console.log('   3. Network connectivity to the server');
    console.log('   4. Correct host and port in .env file');
  }
}

runTest();

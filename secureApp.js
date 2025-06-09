const { MongoClient } = require('mongodb'); 
 
const uri = 'mongodb://myUser:mySecurePassword@127.0.0.1:27017/myDatabase?authSource=admin';

 
async function main() { 
  const client = new MongoClient(uri); 
 
  try { 
    await client.connect(); 
    console.log('Connected successfully with authentication'); 
 
    const db = client.db('myDatabase'); 
    const users = db.collection('users'); 
 
    const docs = await users.find().toArray(); 
    console.log(docs); 
  } catch (err) { 
    console.error('Connection failed:', err); 
  } finally { 
    await client.close(); 
  } 
} 
 
main(); 
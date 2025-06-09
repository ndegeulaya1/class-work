const { MongoClient } = require('mongodb'); 
 
const url = 'mongodb://127.0.0.1:27017';

const dbName = 'myDatabase'; 
 
async function main() { 
  const client = new MongoClient(url); 
 
  try { 
    await client.connect(); 
    console.log('Connected to MongoDB'); 
 
    const db = client.db(dbName); 
    const users = db.collection('users'); 
 
    await users.insertOne({ name: 'Alice', age: 333 }); 
 
    const allUsers = await users.find().toArray(); 
    console.log('Users:', allUsers); 
  } finally { 
    await client.close(); 
2 
} 
} 
main().catch(console.error);
var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("priora");
database.dropDatabase()
database = client.db("priora");
const cars = database.collection("cars");
const result = await cars.insertOne({name:"Универсал"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
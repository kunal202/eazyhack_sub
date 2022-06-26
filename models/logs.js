const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "Logger";

async function mongo(message) {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("logs");

  collection.insertOne({ message: JSON.parse(message), timestamp: new Date() });
  return "done.";
}

module.exports = {
  mongo,
};

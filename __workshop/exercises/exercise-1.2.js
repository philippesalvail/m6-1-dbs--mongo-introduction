const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getCollection = async (dbname) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db(dbname);
  console.log("connected!");

  console.log("MONGO_URI: ", MONGO_URI);

  // Selects documents in a collection or view and
  //returns a cursor to the selected documents.
  // The toArray() method returns an array
  // that contains all the documents from a cursor.
  //The method iterates completely the cursor,
  //loading all the documents into RAM and exhausting the cursor.
  return await db.collection("users").find().toArray();

  client.close();
};
module.exports = {
  getCollection,
};

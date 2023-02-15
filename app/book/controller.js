import { MongoClient } from "mongodb";

const URI = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Work with this database
const db = client.db("InventoryDB");

// Create and use the collection called books
const bookCollection = db.collection("books");

// Talks with database
const controller = {
  create(newBook) {
    return bookCollection.insertOne(newBook);
  },
  createMany(newBooks) {
    return bookCollection.insertMany(newBooks);
  },
  readAll() {
    return bookCollection.find().toArray();
  },
};

export default controller;

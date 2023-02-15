import { MongoClient } from "mongodb";

const URI = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Work with this database
const db = client.db("ShelterDB");

// Create and use the collection called pets
const petCollection = db.collection("pets");

// Insert data into petCollection
// petCollection
//   .insertOne({
//     name: "Fido",
//     type: "Dog",
//   })
//   .then(() => {
//     console.info("inserted");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Talks with database
const controller = {
  create(newPet) {
    return petCollection.insertOne(newPet);
  },
  readAll() {
    return petCollection.find().toArray();
  },
};

export default controller;

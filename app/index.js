import express from "express";
import controller from "./pet/controller.js";

const PORT = 3000;

const app = express();

// Middleware - Allows us to parse JSON data
app.use(express.json());

// Creates new data
app.post("/pet/create", (req, res) => {
  controller.create(req.body).then((result) => {
    res.json(result);
  });
});

// Get all data
app.get("/pet/readAll", (_, res) => {
  controller.readAll().then((result) => {
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.info(`app listening on port ${PORT}`);
});

import express from "express";
import controller from "./pet/controller.js";
import bookRouter from "./book/routes.js";

const PORT = 3000;

const app = express();

// Middleware - Allows us to parse JSON data
app.use(express.json());

// Creates new data from pet
app.post("/pet/create", (req, res) => {
  controller.create(req.body).then((result) => {
    res.json(result);
  });
});

// Get all data from pet
app.get("/pet/readAll", (_, res) => {
  controller.readAll().then((result) => {
    res.json(result);
  });
});

// Middleware - sends requests to /book to the bookRouter
app.use("/book", bookRouter);

app.listen(PORT, () => {
  console.info(`app listening on port ${PORT}`);
});

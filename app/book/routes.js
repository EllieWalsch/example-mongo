import { Router } from "express";
import inventoryController from "./controller.js";

const router = new Router();

router.post("/create", async (req, res) => {
  const createdBook = await inventoryController.create(req.body);
  res.json(createdBook);
});

export default router;

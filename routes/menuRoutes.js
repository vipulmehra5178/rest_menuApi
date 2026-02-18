import express from "express";
import {
  getAllMenuItems,
  addMenuItem,
  deleteMenuItem,
} from "../controllers/menuController.js";

const router = express.Router();

router.route("/")
  .get(getAllMenuItems)
  .post(addMenuItem);

router.route("/:id")
  .delete(deleteMenuItem);

export default router;

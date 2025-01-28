import express from "express";
import { getAllMenuItems, addMenuItem, deleteMenuItem } from "../controllers/menuController.js";

const router = express.Router();

router.get("/", getAllMenuItems); // Get all menu items
router.post("/", addMenuItem);    // Add a new menu item
router.delete("/:id", deleteMenuItem); // Delete a menu item by ID

export default router;

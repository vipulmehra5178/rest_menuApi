import MenuItem from "../models/MenuItem.js";

export const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find().lean(); 
    res.set("Cache-Control", "public, max-age=60"); 
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

export const addMenuItem = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const newMenuItem = new MenuItem({ name, description, price, image, category });
    await newMenuItem.save();
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

export const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await MenuItem.findByIdAndDelete(id);
    if (!deletedItem) return res.status(404).json({ error: true, message: "Menu item not found" });
    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

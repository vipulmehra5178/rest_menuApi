import MenuItem from "../models/MenuItem.js";

export const getAllMenuItems = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, category } = req.query;

    const query = category ? { category } : {};

    const menuItems = await MenuItem.find(query)
      .select("name price image category") 
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();

    res.set("Cache-Control", "public, max-age=120");
    res.status(200).json(menuItems);
  } catch (error) {
    next(error);
  }
};

export const addMenuItem = async (req, res, next) => {
  try {
    const newMenuItem = await MenuItem.create(req.body);
    res.status(201).json(newMenuItem);
  } catch (error) {
    next(error);
  }
};

export const deleteMenuItem = async (req, res, next) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ error: true, message: "Menu item not found" });
    }

    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (error) {
    next(error);
  }
};

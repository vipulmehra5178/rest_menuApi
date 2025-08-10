import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

menuSchema.index({ category: 1 });
menuSchema.index({ name: 1 });

const MenuItem = mongoose.model("MenuItem", menuSchema);
export default MenuItem;

import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, index: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, index: true },
    image: { type: String, required: true },
    category: { type: String, required: true, index: true },
  },
  { timestamps: true }
);

menuSchema.index({ category: 1, price: 1 });

const MenuItem = mongoose.model("MenuItem", menuSchema);
export default MenuItem;

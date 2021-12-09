import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    code: {
      tipe: Number,
      required: [true, "Product Code is required"],
    },
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    sellprice: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      required: true,
      enum: ["$", "€"],
      default: "$",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    isfreeshipping: {
      type: Boolean,
      default: false,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
  }
);

export default mongoose.model("Product", ProductSchema);

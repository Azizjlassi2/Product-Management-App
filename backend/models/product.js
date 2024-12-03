const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      min: [1, "La quatité doit être supérieur à 0."],
    },
  },
  {
    timestamps: true, // created_at updated_at
  }
);

const Product = mongoose.model("Product", ProductSchema);
Product;

module.exports = Product;

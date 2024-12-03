const Product = require("../models/product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error ",
    });
  }
};

exports.addProduct = async (req, res) => {
  const { name, price, image, quantity } = req.body;

  if (!name || !price || !image || !quantity) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields !",
    });
  }
  try {
    const newProduct = await Product.create({
      name,
      price,
      image,
      quantity,
    });
    console.log(newProduct);
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error ",
    });
  }
};

exports.getProductById = () => {};

exports.updateProduct = () => {};

exports.deleteProduct = () => {};

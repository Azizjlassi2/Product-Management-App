const express = require("express");

const {
  addProduct,
  getAllProducts,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").post(addProduct).get(getAllProducts);

module.exports = router;

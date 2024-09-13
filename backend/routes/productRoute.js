const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");
const { protect, admin } = require("../middleware/isAuth");


const router = express.Router();

router.route("/products").get(protect, getAllProducts);
router.route("/product/new").post(protect, admin, createProduct);
router.route("/product/:id").put(protect, admin, updateProduct).delete(protect, admin, deleteProduct).get(protect, getProductDetails);

module.exports = router
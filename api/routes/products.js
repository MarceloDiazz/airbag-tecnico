const express = require("express");
const router = express.Router();
const dbConnect = require("../config/database");
const ProductsController = require("../controllers/productsController");

dbConnect();

router.get("/", ProductsController.allProducts);
router.get("/:productId", ProductsController.getProductById);
router.get("/make/:name", ProductsController.productsByMake);
module.exports = router;

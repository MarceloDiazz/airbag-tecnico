const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminController");
const dbConnect = require("../config/database");

dbConnect();

//postear
router.post("/product", AdminController.createProduct);
//eliminar
router.delete("/delete/:productId", AdminController.deleteProduct);
//editar
router.put("/update/:productId", AdminController.editProduct);

module.exports = router;

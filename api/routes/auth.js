const passport = require("passport");
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");
const dbConnect = require("../config/database");

dbConnect();

var cors = require("cors");
router.use(cors());
router.post("/register", AuthController.createUser);
router.post("/login", passport.authenticate("local"), AuthController.loginUser);
router.get("/logout", AuthController.logoutUser);

module.exports = router;

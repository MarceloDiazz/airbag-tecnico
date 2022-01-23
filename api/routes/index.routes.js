const Router = require("express");
const auth = require("./auth");
const admin = require("./admin");
const products = require("./products");

//en vez de app ya traigo directo router
const router = Router();

router.use("/auth", auth);
router.use("/admin", admin);
router.use("/products", products);

router.get("/", (req, res) => {
  res.send("Hola mongo");
});

router.get("/about", (req, res) => {
  res.send("about");
});

module.exports = router;

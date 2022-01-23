const Cars = require("../models/Cars");

class ProductsService {
  static async allProducts() {
    try {
      const products = await Cars.find();

      return { error: false, data: products };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async getProductById(id) {
    try {
      const product = await Cars.findById(id).populate("");

      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async productsByMake(name) {
    console.log("NAME", name);
    try {
      const product = await Cars.find({
        make: { $regex: name, $options: "i" },
      }).populate("make");

      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = ProductsService;

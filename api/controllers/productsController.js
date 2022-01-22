const ProductsService = require("../services/productServices");


class ProductsController {
    static async allProducts(req, res) {
        const { error, data } = await ProductsService.allProducts();

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getProductById(req, res) {
        const { error, data } = await ProductsService.getProductById(req.params.productId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

}


module.exports= ProductsController
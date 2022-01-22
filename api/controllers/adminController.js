const AdminServices= require ("../services/adminServices")


class AdminController {
    static async createProduct(req, res) {
        const { error, data } = await AdminServices.createProduct(req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async deleteProduct(req, res) {
        const { error, data } = await AdminServices.deleteProduct(req.params.productId);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async editProduct(req, res) {
        const { error, data } = await AdminServices.editProduct(req.params.productId, req.body);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

}


module.exports= AdminController
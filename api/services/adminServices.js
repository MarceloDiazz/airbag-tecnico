const Cars= require('../models/Cars')


class AdminServices {
    static async createProduct(body) {
        try {
            const product = await Cars.create(body);

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async deleteProduct(id) {
        try {
            const product = await Cars.deleteOne({_id: {$eq: id}});

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async editProduct(id, body) {
        try {
            const product = await Cars.findByIdAndUpdate(
                id,
                {
                    $set: {
                        image: body.image,
                        name: body.name,
                        description: body.description,
                        stock: body.stock,
                        mark: body.mark,
                        done: body.done,
                    },
                },
                { new: true }
            );

            return { error: false, data: product };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
}


module.exports= AdminServices
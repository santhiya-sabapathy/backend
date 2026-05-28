const Product = require("../models/Product");

// ADD
exports.addProduct = async (req, res) => {

    const product =
        await Product.create({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename

        });
    res.json(product);

};

// GET
exports.getProducts = async (req, res) => {

    const data = await Product.find();
    res.json(data);

};

// UPDATE
exports.updateProduct =
    async (req, res) => {

        try {
            let obj = {
                name: req.body.name,
                price: req.body.price

            };

            if (req.file) {
                obj.image = req.file.filename;
            }

            const data =
                await Product.findByIdAndUpdate(
                    req.params.id, obj,
                    {
                        new: true
                    }
                );
            res.json(data);
        }
        catch (err) {
            res.json(err);
        }
    };
// DELETE
exports.deleteProduct =
    async (req, res) => {

        await Product.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Deleted"
        });
    };
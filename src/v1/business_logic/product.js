const Product =  require('../models/product.modal')

module.exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.send(products)
    } catch (error) {
        res.send({ message: error })
    }
}

module.exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.send(product)
    } catch (error) {
        res.send({ message: error })
    }
}
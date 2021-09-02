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
        res.send({
            success: true,
            message: 'Product created',
        })
    } catch (error) {
        res.send({ message: error })
    }
}

module.exports.updateProduct = async (req, res) => {
    const {id} = req.params
    try {
        const product = await Product.findByIdAndUpdate({_id: id}, req.body)
        return res.send({
			success: true,
			message: 'Content updated',
		});
    } catch (error) {
        res.send({ message: error })
    }
}

module.exports.deleteProduct = async (req, res) => {
    const {id} = req.params
    try {
        await Product.findByIdAndDelete({_id: id})
        res.send({
            success: true,
            message: 'Content deleted',
        });
    } catch (error) {
        res.send({ message: error })
    }
}
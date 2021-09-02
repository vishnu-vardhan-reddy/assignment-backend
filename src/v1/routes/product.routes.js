const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../business_logic/product');

const router = require('express').Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

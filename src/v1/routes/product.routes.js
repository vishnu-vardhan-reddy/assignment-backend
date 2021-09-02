const { getAllProducts, createProduct } = require('../business_logic/product');

const router = require('express').Router();

router.get('/', getAllProducts);
router.post('/', createProduct);


module.exports = router;

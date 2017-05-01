const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const productsController = require('../controllers/productsController')

router.route('/products')
    .get(productsController.showProducts);




module.exports = router;

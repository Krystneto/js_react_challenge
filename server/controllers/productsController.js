const Product = require('../models/product');
const faker = require('../config/faker.js');

showProducts = (req, res) => {
    res.json({faker})
};


module.exports = {
    showProducts
};
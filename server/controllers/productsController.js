const Product = require('../models/product');
const faker = require('../config/faker.js');

showProducts = (req, res) => {
    res.send({faker})
};

hi = (req, res) => {
    res.send('hi')
};

module.exports = {
    showProducts,
    hi
}
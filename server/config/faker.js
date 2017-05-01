const faker = require('faker');

const PRODUCT_COUNT = 10;
const products = [];

for(let i = 0; i < PRODUCT_COUNT; i++) {
    products.push({
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        description: faker.lorem.sentence()
    });
}

console.log(JSON.stringify(products, null, 2));

module.exports = products;
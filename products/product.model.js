const products = [
  {
    id: 'redshoe',
    description: 'Red Shoes',
    price: 42.12,
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
  },
];

function getProducts() {
  return products;
}

module.exports = {
  getProducts,
};

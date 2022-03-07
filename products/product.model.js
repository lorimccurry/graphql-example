const products = [
  {
    id: 'redshoe',
    description: 'Red Shoes',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55.55,
    reviews: [],
  },
];

function getProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

function addProduct(id, description, price) {
  const product = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(product);
  return product;
}

function addProductReview(id, rating, comment) {
  const product = getProductById(id);
  if (product) {
    const productReview = {
      id,
      rating,
      comment,
    };
    product.reviews.push(productReview);
    return productReview;
  }
}

module.exports = {
  getProducts,
  getProductsByPrice,
  getProductById,
  addProduct,
  addProductReview,
};

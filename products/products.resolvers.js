const productsModel = require('./product.model');

module.exports = {
  Query: {
    products: async () => {
      return productsModel.getProducts();
    },
  },
};

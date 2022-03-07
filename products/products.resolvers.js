const productsModel = require('./product.model');

module.exports = {
  Query: {
    products: async () => {
      return productsModel.getProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },
};

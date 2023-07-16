const { PRODUCTS_PATH, IS_PRODUCTION } = require("./constants");

// collection for all products
function products(collection) {
  return collection
    .getFilteredByGlob(PRODUCTS_PATH)
    .filter((product) => product.data.active);
}

module.exports = { products };

const collections = require("./config/collections.js");
const filters = require("./config/filters.js");

module.exports = function (config) {
  // Handling assets (images, fonts, etc.)
  config.addPassthroughCopy({ "./public/": "/" });

  // filters
  Object.keys(filters).forEach((name) => {
    config.addFilter(name, filters[name]);
  });

  // collections
  Object.keys(collections).forEach((name) => {
    config.addCollection(name, collections[name]);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};

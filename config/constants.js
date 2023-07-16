const IS_PRODUCTION = process.env.ELEVENTY_RUN_MODE === "build";
const TEMPLATE_ENGINE = "njk";
const PRODUCTS_PATH = "src/products/**/*.md";

module.exports = { IS_PRODUCTION, TEMPLATE_ENGINE, PRODUCTS_PATH };

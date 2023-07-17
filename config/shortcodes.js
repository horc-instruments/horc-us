const Image = require("@11ty/eleventy-img");

const image = async (
  src,
  alt,
  className = undefined,
  widths = [300],
  formats = ["webp", "jpeg"],
  sizes = "100vw"
) => {
  const metadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: "_site/images",
    urlPath: "/images",
  });

  const attributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  if (className !== undefined) {
    attributes.class = className;
  }
  return Image.generateHTML(metadata, attributes);
};

module.exports = { image };

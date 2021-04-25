const frontmatter = require("remark-frontmatter");
const rehypePrism = require("@mapbox/rehype-prism");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatter],
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", "tsx"],
  webpack: (config, { isServer }) => {
    config.resolve = {
      ...config.resolve,
      modules: ["node_modules", "./pages"],
    };
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
});

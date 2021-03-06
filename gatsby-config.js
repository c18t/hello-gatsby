module.exports = {
  siteMetadata: {
    siteUrl: "https://c18t.net",
    title: "c18t.net",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `article`,
        path: `${__dirname}/article`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};

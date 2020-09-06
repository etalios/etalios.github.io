module.exports = {
  siteMetadata: {
    title: "Re:Learn",
    description: "The Tech We Saw That Day",
    author: "etalios",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/contents/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-code-titles`, `gatsby-remark-prismjs`],
      },
    },
    `gatsby-plugin-postcss`,
  ],
};

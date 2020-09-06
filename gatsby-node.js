const {
  createBlogNodes,
  createBlogPages,
} = require("./gatsby-node/createBlogPages");

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  Promise.all([await createBlogNodes({ node, createNodeField, getNode })]);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  Promise.all([await createBlogPages({ graphql, createPage })]);
};

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const dayjs = require("dayjs");

exports.createBlogNodes = async ({ node, createNodeField, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode });

    const splits = filePath.split("--");
    const datePath = splits[0].slice(1);
    const date = dayjs(datePath);
    const articleSlug = splits[1].slice(0, -1);

    const value = `/blog/${date.format("YYYY/MM/DD")}/${articleSlug}`;

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

const query = `
{
    allMarkdownRemark(
        sort: { fields: [frontmatter___createdAt], order: DESC }
    ) {
        nodes {
            fields {
                slug
            }
            frontmatter {
                title
                createdAt
                draft
            }
        }
    }
}
`;

exports.createBlogPages = async ({ graphql, createPage }) => {
  const result = await graphql(query);
  if (result.errors || !result.data) {
    throw result.errors;
  }

  const allMarkdownRemark = result.data.allMarkdownRemark;
  const posts = allMarkdownRemark.nodes.filter(node => !node.frontmatter.draft);

  posts.forEach((node, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];
    const slug = node.fields.slug;
    const { title } = node.frontmatter;

    createPage({
      path: slug,
      component: path.resolve("src/templates/post.js"),
      context: {
        title,
        slug,
        next,
        previous,
      },
    });
  });

  const postsPerPage = 20;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

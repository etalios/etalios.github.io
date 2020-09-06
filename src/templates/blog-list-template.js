import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/layout";

import ArticleCard from "../components/article-card";

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___createdAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;

const BlogListTemplate = props => {
  const { title, author } = props.data.site.siteMetadata;
  const posts = props.data.allMarkdownRemark.edges;

  return (
    <Layout title={title} author={author}>
      <div className="flex flex-wrap">
        {posts.map(({ node }) => {
          const { excerpt, frontmatter, fields } = node;
          const { title, tags } = frontmatter;
          return (
            <ArticleCard
              key={node.fields.slug}
              title={title}
              url={fields.slug}
              tags={tags.map(name => ({ name, url: "" }))}
              excerpt={excerpt}
            >
              {title}
            </ArticleCard>
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogListTemplate;

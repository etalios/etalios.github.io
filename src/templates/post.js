import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/layout";
import SEO from "../components/SEO";
import Tag from "../components/tag";

import "../styles/style.css";

export const pageQuery = graphql`
  query BlogPost($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        updatedAt(formatString: "yyyy年MM月DD日")
        tags
      }
      html
    }
  }
`;

const PostTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext;
  const { markdownRemark, excerpt, site } = data;
  const { title, author } = site.siteMetadata;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout title={title} author={author}>
      <article className="px-5 max-w-screen-md">
        <SEO title={frontmatter.title} description={excerpt} />
        <section>
          <h1 className="article__title">{frontmatter.title}</h1>
          <div className="flex pt-5">
            <div className="flex flex-row flex-grow">
              <div className="flex-row flex-grow">
                {frontmatter.tags.map(tag => (
                  <Tag key={tag} name={tag} url="#" />
                ))}
              </div>
              <div className="article__date flex-grow-0">
                {frontmatter.updatedAt}更新
              </div>
            </div>
          </div>
          <section
            className="markdown mt-5"
            dangerouslySetInnerHTML={{ __html: html }}
          ></section>
        </section>
      </article>
    </Layout>
  );
};

export default PostTemplate;

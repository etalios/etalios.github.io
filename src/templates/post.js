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
      <article className="mx-5">
        <SEO title={frontmatter.title} description={excerpt} />
        <section>
          <h1 className="article__title">{frontmatter.title}</h1>
          <div className="flex justify-end">
            <div className="article__date pt-2">
              {frontmatter.updatedAt}更新
            </div>
          </div>
          <div className="pt-2">
            {frontmatter.tags.map(tag => (
              <Tag key={tag} name={tag} url="#" />
            ))}
          </div>
          <section
            className="markdown mt-10"
            dangerouslySetInnerHTML={{ __html: html }}
          ></section>
        </section>
      </article>
    </Layout>
  );
};

export default PostTemplate;

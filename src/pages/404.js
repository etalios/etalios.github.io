import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/layout";

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

const NotFoundPage = props => {
  const { title, author } = props.site.siteMetadata;

  return (
    <Layout title={title} author={author}>
      <div>
        <h1>NOT FOUND</h1>
        <p>このページは見つかりませんでした。</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

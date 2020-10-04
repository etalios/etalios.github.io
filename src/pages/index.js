import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layouts/layout";
import ArticleCard from "../components/article-card";

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

const Home = props => {
  const { title, author } = props.data.site.siteMetadata;
  return (
    <Layout title={title} author={author}>
      <ArticleCard
        title="ブログ"
        url="/blog"
        tags={[]}
        excerpt="日記や日々の学習の記録"
      ></ArticleCard>
    </Layout>
  );
};

export default Home;

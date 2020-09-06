import * as React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

export const SEO = props => {
  const lang = props.lang || "ja";
  const meta = props.meta || [];
  const keywords = props.keywords || [];
  const description = props.description || "";

  const { site } = useStaticQuery(
    graphql`
      query Site {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: props.title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `og:type` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: site.siteMetadata.author },
        { name: `twitter:title`, content: props.title },
        { name: `twitter:description`, content: props.description },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`,`),
              }
            : []
        )
        .concat(meta)}
    ></Helmet>
  );
};

export default SEO;

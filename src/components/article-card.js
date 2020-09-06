import React from "react";
import { Link } from "gatsby";

import Tag from "./tag";

import "../styles/style.css";

const ArticleCard = props => {
  const { title, url, tags, excerpt } = props;

  return (
    <section className="w-auto md:w-1/2 mt-5 px-2">
      <div className="rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">
            <Link to={url} className="hover:underline">
              {title}
            </Link>
          </h2>
          <p className="text-gray-700 text-base">{excerpt}</p>
        </div>
        {tags.length === 0 ? (
          <div></div>
        ) : (
          <div className="px-6 py-4">
            {tags.map(tag => (
              <Tag key={tag.name} name={tag.name} url={tag.url}></Tag>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleCard;

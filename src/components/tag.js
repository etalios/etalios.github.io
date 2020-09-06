import * as React from "react";
import { Link } from "gatsby";

import "../styles/style.css";

const Tag = ({ name, url }) => {
  return (
    <Link to={url}>
      <span className="article__tag mr-2">&#035;{name}</span>
    </Link>
  );
};

export default Tag;

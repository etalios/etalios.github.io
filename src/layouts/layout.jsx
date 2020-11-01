import React from "react";
import { Link } from "gatsby";

import "../styles/style.css";
import "../styles/markdown.css";

require("typeface-anton");

const Header = ({ title }) => (
  <header className="flex justify-center">
    <div className="title p-10">
      <Link to="/">{title}</Link>
    </div>
  </header>
);

const Layout = props => {
  const { title, author, children } = props;

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header title={title} />
      <main className="mb-auto flex flex-col container max-w-screen-md mx-auto pb-10">
        {children}
      </main>
      <footer className="flex justify-center p-8 bg-gray-200">
        <div className="flex flex-col text-center">
          <div className="text-sm">
            © {new Date().getFullYear()} {author}, Built with {` `}{" "}
            <a href="https://www.gatsbyjs.com/" className="hover:underline">
              Gatsby
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Article from "../component/Article";

export const TopScreen = () => {
  const list = [
    {
      id: 1,
      title: "First Post",
      content: "First content",
    },
  ];

  const [article, setArticle] = useState([]);
  function createArticleHandler() {
    setArticle(list);
  }
  const articles = list.map((article) => (
    <Article title={article.title} content={article.content} />
  ));
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-slate-500">
      {articles}
      <div
        className="bg-blue-600 px-6 my-4 rounded-lg"
        onClick={createArticleHandler}
      >
        <Link to="/article">New Article</Link>
      </div>
    </div>
  );
};

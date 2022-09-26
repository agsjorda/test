import React from "react";
import { Link } from "react-router-dom";

const Article = ({ title, content }) => {
  return (
    <div className="w-1/2 bg-slate-300 rounded-lg flex flex-col justify-center items-center">
      <h1 className="text-8xl">{title}</h1>
      <div>
        <p>{content}</p>
      </div>

      <div>
        <button className="bg-red-500 px-8 my-4 rounded-lg">Post</button>
      </div>
    </div>
  );
};

export default Article;

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
      <div className="flex justify-center items-center gap-5">
        <button className="px-6 my-4 bg-green-800 rounded-lg">Edit</button>
        <button className="px-6 my-4 bg-red-600 rounded-lg">Delete</button>
      </div>
    </div>
  );
};

export default Article;

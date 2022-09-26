import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateArticleScreen = () => {
  const [article, setArticle] = useState({ article: "" });

  function handleChange(e) {
    setArticle({ [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form>
        <label htmlFor="arcticle">New Article</label>
        <input
          type="text"
          placeholder="New Article"
          name="article"
          id="article"
          value={article}
          onChange={handleChange}
        />
      </form>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default CreateArticleScreen;

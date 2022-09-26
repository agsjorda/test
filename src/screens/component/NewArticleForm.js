import React, { useState } from "react";

const NewArticleForm = () => {
    const [article, setArticle]= useState({article: ''})

    function handleChange(e) {
        setArticle({[e.target.name]: e.target.value})
    }
  return (

    <form>
      <label htmlFor="arcticle">New Article</label>
      <input type="text" placeholder="New Article" name="article" id="article" value={article} onChange={}/>
    </form>
  );
};

export default NewArticleForm;

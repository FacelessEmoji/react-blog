import React from 'react';

const Article = ({ title, category, author, content}) => {
    return (
        <article className="article_container">
            <h1 className="article-title">{title}</h1>
            <p className="article-content">{category}</p>
            <p className="article-content">{author}</p>
            <p className="article-content">{content}</p>
        </article>
    );
};

export default Article;
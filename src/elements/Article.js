import React from 'react';
import '../assets/styles/article.css';

const Article = ({ id, title, category, author, content, onDelete, onArchive }) => {
    const handleDelete = () => {
        onDelete(id);
    };

    const handleArchive = () => {
        onArchive(id);
    };

    return (
        <article className="article_container">
            <h1 className="article-title">{title}</h1>
            <p className="article-category">Категория: <strong>{category}</strong></p>
            <p className="article-author">Автор: <strong>{author}</strong></p>
            <p className="article-content">{content}</p>
            <div className="buttons-container">
                <button className="delete-button" onClick={handleDelete}>
                    Удалить
                </button>
                <button className="archive-button" onClick={handleArchive}>
                    Архив
                </button>
            </div>
        </article>
    );
};

export default Article;

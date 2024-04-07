import React from "react";
import Article from "../elements/Article";
import '../assets/styles/main.css';

const Main = ({ articles, handleDelete, handleArchive }) => {
    return (
        <main className="main">
            <h2 className="main-title">Записи</h2>
            <hr className="line"/>
            <div className="articles-container">
                {articles
                    .filter(article => !article.is_archived)
                    .map(article => (
                    <Article
                        key={article.id}

                        id={article.id}
                        title={article.title}
                        category={article.category}
                        author={article.author}
                        content={article.content}

                        onDelete={handleDelete} // Передаем функцию удаления
                        onArchive={handleArchive} // Передаем функцию архивирования
                    />
                ))}
            </div>
        </main>
    );
};

export default Main;

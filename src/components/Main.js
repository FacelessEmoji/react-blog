import React from "react";
import Article from "../elements/Article";
import '../assets/styles/main.css';
import '../assets/styles/index.css';
const Main = () => {
    const articles = [
        { title: 'Первая статья', category: 'Общество', author: 'Иван Иванов', content: 'Содержание первой статьи' },
        { title: 'Вторая статья', category: 'Технологии', author: 'Петр Петров', content: 'Содержание второй статьи' },
        // Добавьте другие статьи по аналогии
    ];

  return (
      <main className="main">
          <h2 className="main-title">Записи</h2>
          <hr className="line"/>
          <div className="articles">
              {articles.map(article => (
                  <Article title={article.title} category={article.category} author={article.author} content={article.content} />
              ))}
              {/*    TODO: Тут статьи */}
          </div>
      </main>
  );
};

export default Main;
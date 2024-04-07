import React from "react";
import Article from "../elements/Article";
import '../assets/styles/main.css';
import '../assets/styles/index.css';
const Main = () => {
    const articles = [
        {
            title: 'Марк Цукерберг продемонстрировал работу VR-гарнитуры Project\n' +
                'Cambria',
            category: 'Технологии',
            author: 'Иван Иванов',
            content: 'Глава Meta Марк Цукерберг опубликовал в видео работы VR-гарнитуры нового\n' +
                'поколения, поддерживающей приложения виртуальной и дополненной реальности. На\n' +
                'этапе разработки устройство носит название Project Cambria, а его выход может состояться\n' +
                'уже в этом году.' },
        {
            title: 'Вторая статья',
            category: 'Технологии',
            author: 'Петр Петров',
            content: 'Содержание второй статьи' },
    ];

  return (
      <main className="main">
          <h2 className="main-title">Записи</h2>
          <hr className="line"/>
          <div className="articles-container">
              {articles.map(article => (
                  <Article
                      title={article.title}
                      category={article.category}
                      author={article.author}
                      content={article.content}
                  />
              ))}
          </div>
      </main>
  );
};

export default Main;
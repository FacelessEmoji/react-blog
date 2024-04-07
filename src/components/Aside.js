import React from "react";
import '../assets/styles/aside.css';
import '../assets/styles/index.css';

const Aside = () => {
    const articles = [
        {
            id: 1,
            is_archived: true,
            title: 'Марк Цукерберг продемонстрировал работу VR-гарнитуры Project\n' +
                'Cambria',
            category: 'Технологии',
            author: 'Иван Иванов',
            content: 'Глава Meta Марк Цукерберг опубликовал в видео работы VR-гарнитуры нового\n' +
                'поколения, поддерживающей приложения виртуальной и дополненной реальности. На\n' +
                'этапе разработки устройство носит название Project Cambria, а его выход может состояться\n' +
                'уже в этом году.'
        },
        {
            id: 2,
            is_archived: true,
            title: 'Вторая статья',
            category: 'Технологии',
            author: 'Петр Петров',
            content: 'Содержание второй статьи'
        },
    ];

    return (
        <aside className="aside">
            <h2 className="aside-title">Создать запись</h2>
            <hr className="line"/>

            <form className="post-form">
                <div className="author-input">
                    <label htmlFor="author">Автор</label>
                    <input type="text" id="author" name="author"/>
                </div>
                <div className="title-input">
                    <label htmlFor="title">Заголовок</label>
                    <input type="text" id="title" name="title"/>
                </div>
                <div className="category-input">
                    <label htmlFor="category">Категория</label>
                    <input type="text" id="category" name="category"/>
                </div>
                <div className="content-input">
                    <label htmlFor="content">Содержание</label>
                    <textarea id="content" name="content"/>
                </div>
                <button className="create-button" onClick={handleForm}>
                    Создать
                </button>
            </form>

            <h2 className="aside-archive-title">Архив</h2>
            <hr className="line"/>
            <div className="aside-articles-container">
                <ol>
                    {articles.map(article => (
                        <li key={article.id}>{article.title}</li>
                    ))}
                </ol>
            </div>
        </aside>
    );
};


function handleForm() {
}

export default Aside;
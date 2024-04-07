import React, {useState} from "react";
import '../assets/styles/aside.css';

const Aside = ({ addNewArticle, articles }) => {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        category: "",
        content: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleForm = (event) => {
        event.preventDefault();
        const newArticle = {
            id: Date.now(),
            is_archived: false,
            ...formData
        };
        addNewArticle(newArticle);
        setFormData({
            author: "",
            title: "",
            category: "",
            content: ""
        });
    };

    return (
        <aside className="aside">
            <h2 className="aside-title">Создать запись</h2>
            <hr className="line"/>

            <form className="post-form" onSubmit={handleForm}>
                <div className="author-input">
                    <label htmlFor="author">Автор</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                    />
                </div>
                <div className="title-input">
                    <label htmlFor="title">Заголовок</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="category-input">
                    <label htmlFor="category">Категория</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                <div className="content-input">
                    <label htmlFor="content">Содержание</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="create-button">
                    Создать
                </button>
            </form>

            <h2 className="aside-archive-title">Архив</h2>
            <hr className="line"/>
            <div className="aside-articles-container">
                <ol>
                    {articles
                        .filter(article => article.is_archived)
                        .map(article => (
                        <li key={article.id}>
                            {article.title}
                        </li>
                    ))}
                </ol>
            </div>
        </aside>
    );
};

export default Aside;

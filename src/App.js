import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import './assets/styles/index.css';
import articlesData from "./articles.json";

export default function App() {
    // Стейт для хранения данных о статьях
    const [articles, setArticles] = useState([]);

    // Загружаем статьи из articles.json при загрузке компонента
    useEffect(() => {
        setArticles(articlesData);
    }, []);

    const addNewArticle = (newArticle) => {
        setArticles(prevArticles => [...prevArticles, newArticle]); // Добавляем новую статью в стейт
    };

    const handleArchive = (articleId) => {
        setArticles(prevArticles =>
            prevArticles.map(article =>
                //...article, is_archived: true - копия статьи с изменным полем
                article.id === articleId ? {...article, is_archived: true} : article
            )
        );
    };

    const handleDelete = (articleId) => {
        setArticles(prevArticles =>
            prevArticles.filter(article => article.id !== articleId)
        );
    };

    return (
        <div>
            <Header/>
            <div className="main-container">
                <Main articles={articles}
                      handleArchive={handleArchive}
                      handleDelete={handleDelete}
                />
                <Aside
                    articles={articles}
                    addNewArticle={addNewArticle}
                />
            </div>
            <Footer/>
        </div>
    );
}


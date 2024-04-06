import React from "react";
import '../assets/styles/aside.css';
import '../assets/styles/index.css';
const Aside = () => {
  return (
    <aside className="aside">
        <h2 className="aside-title">Создать запись</h2>
        <hr className="line"/>

        <form className="post-form">
            <div className="author-input">
                <label htmlFor="author">Автор</label>
                <input type="text" id="author" name="author" />
            </div>
            <div className="title-input">
                <label htmlFor="title">Заголовок</label>
                <input type="text" id="title" name="title" />
            </div>
            <div className="category-input">
                <label htmlFor="category">Категория</label>
                <input type="text" id="category" name="category" />
            </div>
            <div className="content-input">
                <label htmlFor="content">Содержание</label>
                <textarea id="content" name="content" />
            </div>
        </form>

        <h2 className="aside-archive-title">Архив</h2>
        <hr className="line"/>
    </aside>
  );
};

export default Aside;
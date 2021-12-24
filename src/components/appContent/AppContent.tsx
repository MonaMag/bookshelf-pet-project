import React from 'react';
import s from './AppContent.module.css'
import Header from "./header/Header";
import {Footer} from "./footer/Footer";
import {BooksList} from "./main/BooksList";


const AppContent = () => {

    return (
        <div className={s.appContent}>
            <header className={s.header}><Header/></header>
            <div className={s.main}><BooksList/></div>
            <footer className={s.footer}><Footer/></footer>
        </div>
    );
};

export default AppContent;
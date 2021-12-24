import React from 'react';
import {NavLink} from "react-router-dom";
import s from './AppContent.module.css'
import Header from "./Header";
import {BooksList} from "./BooksList";
import {Footer} from "./Footer";


const AppContent = () => {

    return (
        <div className={s.appContainer}>
            <Header/>
            <BooksList/>
            <div className={s.start}>
                <span className={s.welcome}>Welcome to</span>
                <h1 className={s.name}>Bookshelf</h1>
                <NavLink to="/content" className={s.link}>Start</NavLink>
            </div>
            <Footer/>
        </div>
    );
};

export default AppContent;
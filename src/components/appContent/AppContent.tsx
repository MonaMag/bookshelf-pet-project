import React from 'react';
import s from './AppContent.module.css'
import Header from "./header/Header";
import {Footer} from "./footer/Footer";
import {BooksContainer} from "./bookContainer/BooksContainer";


const AppContent = () => {

    return (
        <div className={s.appContent}>
            <Header/>
            <BooksContainer/>
            <Footer/>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda consequatur corporis debitis dignissimos, dolorem error est eveniet, fuga fugit minus modi mollitia, neque nulla quam quasi quo sed unde!
            </span>
        </div>
    );
};

export default AppContent;
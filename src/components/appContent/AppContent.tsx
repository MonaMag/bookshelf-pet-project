import React from 'react';
import s from './AppContent.module.css'
import Header from "./header/Header";
import {Footer} from "./footer/Footer";
import {BooksList} from "./main/BooksList";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import Preloader from "../../common/preloader/Preloader";


const AppContent = () => {
    console.log("AppContent")
    const isFetching = useSelector<AppStateType, boolean>(state => state.app.isFetching)
    return (
        <div className={s.appContent}>
            <header className={s.header}><Header/></header>

            {isFetching && <Preloader/>}
            <div className={s.main}><BooksList/></div>
            <footer className={s.footer}><Footer/></footer>
        </div>
    );
};

export default AppContent;
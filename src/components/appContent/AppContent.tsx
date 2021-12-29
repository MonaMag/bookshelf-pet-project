import React from 'react';
import s from './AppContent.module.css'
import Header from "./header/Header";
import {Footer} from "./footer/Footer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import Preloader from "../../common/preloader/Preloader";
import {BooksList} from "./main/BooksList";


const AppContent: React.FC = () => {
    console.log("AppContent")
    const isFetching = useSelector<AppStateType, boolean>(state => state.app.isFetching)
    return (
        <div className={s.appContent}>
            <div className={s.header}>
                <Header/>
            </div>
            {isFetching && <Preloader/>}

            <div className={s.main}>
                <BooksList/>
            </div>

            <div className={s.footer}>
                <Footer/>
            </div>
        </div>
    );
};

export default AppContent;
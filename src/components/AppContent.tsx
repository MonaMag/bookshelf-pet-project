import React from 'react';
import {NavLink} from "react-router-dom";
import s from './AppContent.module.css'


const AppContent = () => {

    return (
        <div className={s.appContainer}>
                <div>
                    <p style={{fontSize: '10px'}}>Look for your book</p>
                    <p style={{fontSize: '14px'}}>Add to your shelf</p>
                    <p style={{fontSize: '18px'}}> Read with love</p>
                </div>
                <div>
                    <img
                        src="https://storage.googleapis.com/vst-chameleon-prod/multipart-1590182594-56034554973989-2"
                        alt="presentation" className={s.presentation}/>
                </div>
                <div className={s.start}>
                    <span className={s.welcome}>Welcome to</span>
                    <h1 className={s.name}>Bookshelf</h1>
                    <NavLink to="/books" className={s.link}>Start</NavLink>
                </div>

        </div>
    );
};

export default AppContent;
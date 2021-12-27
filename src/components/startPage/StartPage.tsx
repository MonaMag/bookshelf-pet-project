import React from 'react';
import s from "./StartPage.module.css";
import {NavLink} from "react-router-dom";


export const StartPage = () => {

    console.log("StartPage")
    return (
        <div className={s.startStyle}>
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
                <p className={s.welcome}>Welcome to</p>
                <h1 className={s.name}>Bookshelf</h1>
                <NavLink to="/content" className={s.link}>Start</NavLink>
            </div>
        </div>
    )
}
import React from 'react'
import s from './Footer.module.css'

export const Footer = () => {
    console.log("Footer")
    return (
        <div className={s.footer}>
            <div>@ 2021 Mona Mag. All rights reserved.</div>
            <div>Social Networks</div>
        </div>
    );
};


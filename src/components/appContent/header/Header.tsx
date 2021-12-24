import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div>My bookshelf</div>
            <div>Search</div>
            <div className={s.links}>
                <NavLink to="/" className={s.link}>Back</NavLink>
            </div>
        </header>
    );
};

export default Header
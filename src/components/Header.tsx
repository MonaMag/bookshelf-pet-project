import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div>Bookshelf</div>
            <div>Search</div>
            <div className="links">
                <NavLink to="/" className="link">Back</NavLink>
            </div>
        </header>
    );
};

export default Header
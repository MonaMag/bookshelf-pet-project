import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div>Bookshelf</div>
            <div>Search</div>
            <div className="links">
                <NavLink to="/" className="link">Books</NavLink>
            </div>
        </header>
    );
};

export default Header
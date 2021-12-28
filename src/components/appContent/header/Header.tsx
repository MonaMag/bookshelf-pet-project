import React, {ChangeEvent, MouseEvent, KeyboardEvent, useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {searchBookAC} from "../../../bll/books-reducer";
import {useDispatch} from "react-redux";


const Header = () => {
    const dispatch = useDispatch()
    //const navigate = useNavigate()
    //const isFetching = useSelector<AppStateType, boolean>(state => state.app.isFetching)
    const [searchValue, setSearchValue] = useState<string>('')


    const onSetSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
        console.log('setSearchValue')
    }
    const searchBookHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(searchBookAC(searchValue))
        setSearchValue('')
        console.log('send search value')
    }
    const onPressEnter = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            dispatch(searchBookAC(searchValue))
        }
    }
    console.log("Header")

    return (
        <header className={s.header}>
            <div>My bookshelf</div>
            <form className={s.searchForm}>
                <input type="text"
                       placeholder="Author.."
                       onChange={onSetSearchValue}
                       value={searchValue}
                       onKeyPress={onPressEnter}
                />
                <button className={s.searchBtn}
                        onClick={searchBookHandler}
                        type="submit">&#8594;</button>
            </form>
            <div className={s.links}>
                <NavLink to="/" className={s.link}>Back</NavLink>
            </div>
        </header>
    );
};

export default Header
import React, {ChangeEvent, MouseEvent, KeyboardEvent, useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {searchBookAC, setBooksAC} from "../../../bll/books-reducer";
import {useDispatch} from "react-redux";
import {initState} from "../../../bll/data";


const Header = () => {
    const dispatch = useDispatch()
    //const navigate = useNavigate()
    //const isFetching = useSelector<AppStateType, boolean>(state => state.app.isFetching)
    const [searchValue, setSearchValue] = useState<string>('')
    const [showButton, setShowButton] = useState<boolean>(false)


    const onSetSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
        console.log('setSearchValue')
    }
    const searchBookHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(searchBookAC(searchValue))
        setSearchValue('')
        setShowButton(true)
        console.log('send search value')
    }
    const onPressEnter = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            dispatch(searchBookAC(searchValue))
            setShowButton(true)
        }
    }
    const getAllBooksHandler = () => {
        dispatch(setBooksAC(initState))
        setShowButton(false)
    }
    console.log("Header")

    return (
        <div className={s.header}>
            <div className={s.backBooksWrap}>
                {showButton && <div className={s.backBooks} onClick={getAllBooksHandler}>All books</div>}
            </div>
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
                <NavLink to="/" className={s.link}>Home</NavLink>
            </div>
        </div>
    );
};

export default Header
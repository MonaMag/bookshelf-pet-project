import React, {ChangeEvent, useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {searchBookAC} from "../../../bll/books-reducer";
import {useDispatch} from "react-redux";


const Header = () => {
    const dispatch = useDispatch()
   /* const isFetching = useSelector<AppStateType, boolean>(state => state.app.isFetching)*/
    const [searchValue, setSearchValue] = useState<string>('')

/*
    const [value, setValue] = useState('')
    const onChangeValue = (e: any) => {
        setValue(e.currentTarget.value)
    }
*/


    const onSetSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
        console.log('setSearchValue')
    }

    const searchBook = () => {
        debugger
        dispatch(searchBookAC(searchValue))
        setSearchValue('')
        console.log('send search value')
    }

    console.log("Header")
    return (
        <header className={s.header}>
            <div>My bookshelf</div>
                <form className={s.searchForm}>
                    <input type="search"
                           placeholder="Author.."
                           onChange={onSetSearchValue}
                           value={searchValue}
                      />
                    <button className={s.searchBtn}
                            onClick={searchBook}
                            type="submit">&#8594;</button>
                </form>
            <div className={s.links}>
                <NavLink to="/" className={s.link}>Back</NavLink>
            </div>
        </header>
    );
};

export default Header
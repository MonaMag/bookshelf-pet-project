import React from 'react';
import {Book} from "../book/Book";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store";
import {BookType} from "../../../../bll/books-reducer";
import s from './BooksList.module.css'


export type BooksListPropsType = {
    current? : 0,
    next? : 10,
    query? : null
}

export const BooksList = (props: BooksListPropsType) => {


    const dispatch = useDispatch()

    const books = useSelector<AppStateType, Array<BookType>>(state => state.books)


    return (
        <div className={s.container}>
            <div className={s.cardsContainer}>
                {books.map(el =>
                    <div key={el.id}>
                        <Book book={el}/>
                    </div>
                )}
            </div>

        </div>
    )
}


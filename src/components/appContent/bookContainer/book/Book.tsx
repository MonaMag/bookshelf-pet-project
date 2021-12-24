import React from 'react';
import {BookType} from "../../../../bll/books-reducer";
import s from './Book.module.css'

type BookPropsType = {
    book: BookType
}

export const Book =(props: BookPropsType) => {


    return (
        <div className={s.bookWrap}>
           <h3>{props.book.title}</h3>
            <img src={props.book.imageLink} alt="cover"/>
        </div>
    )

}





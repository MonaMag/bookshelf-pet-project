import React from 'react';
import s from './Book.module.css'
import {BookType} from "../../../../bll/data";

type BookPropsType = {
    book: BookType
}

export const Book =(props: BookPropsType) => {

    console.log(props.book.imageLink)
    return (
        <div className={s.bookWrap}>
            <img src={props.book.imageLink}/>
           <h3>{props.book.title}</h3>
            <span>{props.book.author}</span>

        </div>)
}
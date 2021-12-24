import React from 'react';
import s from './Book.module.css'
import {BookType} from "../../../../bll/data";

type BookPropsType = {
    book: BookType
}

export const Book =(props: BookPropsType) => {


    return (
        <div className={s.bookWrap}>
           <h3>{props.book.title}</h3>
            <h4>{props.book.author}</h4>
            <img src={props.book.imageLink} alt="cover"/>
        </div>
    )

}





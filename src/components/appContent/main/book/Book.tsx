import React, {useState} from 'react';
import s from './Book.module.css'
import {BookType} from "../../../../bll/data";
import {BookDetailModal} from "../../../modal/BookDetailModal";


type BookPropsType = {
    book: BookType
}

export const Book =(props: BookPropsType) => {

    const [showModal, setShowModal] = useState(false)

    const openModalWindow = () => {
        setShowModal(true)
    }


    console.log(props.book.imageLink)
    return (
        <div className={s.bookWrap}>
            {showModal && <BookDetailModal
                showModal={showModal}
                setShowModal={setShowModal}
                book={props.book}
            />}
            <img src={props.book.imageLink}/>
            <button className={s.btn} onClick={openModalWindow}>more info... </button>
           {/*<h3>{props.book.title}</h3>
            <span>{props.book.author}</span>*/}

        </div>)
}
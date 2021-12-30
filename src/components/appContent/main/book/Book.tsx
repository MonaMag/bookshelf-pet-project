import React, {useState} from 'react';
import s from './Book.module.css'
import {BookType} from "../../../../bll/data";
import {BookDetailModal} from "../../../modal/BookDetailModal";


type BookPropsType = {
    book: BookType
}

export const Book = (props: BookPropsType) => {

    const [showModal, setShowModal] = useState(false)

    const openModalWindow = () => {
        setShowModal(true)
    }

    console.log("Book")
    return (
        <div className={s.booksContainer}>
            <div className={s.bookWrap}>
                {showModal && <BookDetailModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    book={props.book}
                />}
                <img className={s.imgCover} onClick={openModalWindow} src={props.book.imageLink} alt={'cover'}/>
            </div>
            <h3 className={s.bookTitle}>{props.book.title}</h3>
        </div>)
}
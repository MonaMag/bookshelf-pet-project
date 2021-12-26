import React, {MouseEvent} from "react";
import s from "./Modal.module.css";
import {useDispatch} from "react-redux";
import {BookType} from "../../bll/data";


type OpenModalType = {
    showModal: boolean
    setShowModal: (show: boolean) => void
    book: BookType
}

export const BookDetailModal = (props: OpenModalType) => {
    const dispatch = useDispatch();
    const activeModalHandler = () => {
        props.setShowModal(false)
    }
    const stopActiveModal = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    return (
        <div className={s.modalContainer} onClick={activeModalHandler}>
            <div className={s.modalContent} onClick={stopActiveModal}>

                <div className={s.bookWrap}>
                    <img src={props.book.imageLink}/>
                    <h3>{props.book.title}</h3>
                    <span>Author: <i>{props.book.author}</i></span>
                    <p><i>Year: {props.book.year}</i></p>
                    <span>Pages: <i>{props.book.pages}</i></span>

                </div>

            </div>
        </div>
    )
}


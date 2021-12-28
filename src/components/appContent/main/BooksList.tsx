import React from 'react';
import {Book} from "./book/Book";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import s from './BooksList.module.css'
import {BookType} from "../../../bll/data";


export const BooksList = () => {
    console.log("BooksList")
    //const dispatch = useDispatch()
    const books = useSelector<AppStateType, Array<BookType>>(state => state.books)

    console.log('books', books)

    /*  useEffect(() => {
          dispatch(setBooksAC)
      }, [dispatch])
  */
    return (
        <div className={s.container}>
            <div className={s.booksContainer}>
                {books.map(el =>
                    <div key={el.id}>
                        <Book book={el}/>
                    </div>
                )}
            </div>
        </div>
    )
}


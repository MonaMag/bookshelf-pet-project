import React from 'react';
import {Book} from "./book/Book";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import s from './BooksList.module.css'
import {BookType} from "../../../bll/data";



export type BooksListPropsType = {
    booksCount?: number
}

export const BooksList = (props: BooksListPropsType) => {
    console.log("BooksList")

    const books = useSelector<AppStateType, Array<BookType>>(state => state.books)
    console.log('books', books)
    /*  const booksTotalCount = books.length
      const pageCount = 5
      const onChangeCurrentPage = (page: number) => {
          dispatch(setCurrentPageAC(page))
      }
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
            {/*<div className={s.paginator}>
                <Paginator totalItemsCount={booksTotalCount}
                           pageSize={pageCount}
                           currentPage={currentPage}
                           onChangeCurrentPage={onChangeCurrentPage}
                />
            </div>*/}
        </div>
    )
}


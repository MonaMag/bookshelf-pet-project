import {initState, stateType} from "./data";


type BookType = {
    author: string
    country: string
    imageLink: string
    language: string
    link: string
    pages: number
    title: string
    year: number
}

export  const booksReducer = (state: stateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'CURRENT_BOOK':
            return action.payload;
        case 'SEARCH_BOOK':
            return action.payload
        default:
            return state;
    }
}



//* Action Creators --------------------------------------------------------->
type ActionsType = ReturnType<typeof searchBookAC> |  ReturnType<typeof selectBookAC>

export const searchBookAC = (book: BookType) => ({type: 'SEARCH_BOOK', payload: book} as const)
export const selectBookAC = (book: BookType) => ({type: 'CURRENT_BOOK', payload: book} as const)
import {BookType, initState} from "./data";


export  const booksReducer = (state: BookType[] = initState, action: ActionsType): BookType[] => {
    switch (action.type) {
        case 'booksReducer/SEARCH_BOOK': {
            console.log(action.payload)
            const reg = new RegExp(action.payload, 'i')
            return state.filter( el => {
                        return reg.test(el.author!)
                })
            /*return [...state.filter(el => el.author === action.payload)]*/
        }
        case 'booksReducer/SET_BOOKS':
            return [...action.payload]
    /*    case 'booksReducer/SET_PAGE_COUNT' : {
            return {...state, pageCount: action.payload}
        }
        case 'booksReducer/CURRENT_BOOK':
            return action.payload;
        case 'booksReducer/SET_CURRENT_PAGE' : {
            return {...state, page: action.payload}
        }*/
        default:
            return state;
    }
}



//* Action Creators --------------------------------------------------------->
type ActionsType = ReturnType<typeof searchBookAC> | ReturnType<typeof setBooksAC>

export const searchBookAC = (bookAuthor: string) => ({type: 'booksReducer/SEARCH_BOOK', payload: bookAuthor} as const)
export const setBooksAC = (books: BookType[]) => ({type: 'booksReducer/SET_BOOKS', payload: books} as const)

/*
export const selectBookAC = (book: BookType) => ({type: 'booksReducer/CURRENT_BOOK', payload: book} as const)
export const setCurrentPageAC = (page: number) => ({type: 'booksReducer/SET_CURRENT_PAGE', payload: page} as const)
export const setPageCountAC = (pageCount: number) =>({type: 'booksReducer/SET_PAGE_COUNT', payload: pageCount} as const)*/

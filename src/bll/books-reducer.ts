import {BookType, initState, stateType} from "./data";


export  const booksReducer = (state: stateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'CURRENT_BOOK':
            return action.payload;
        case 'SEARCH_BOOK': {
            const a = [...state.filter(el => el.author === action.payload)]
            debugger
            return a
        }
        case 'SET_PAGE_COUNT' : {
            return {...state, pageCount: action.payload}
        }
        case 'SET_CURRENT_PAGE' : {
            return {...state, page: action.payload}
        }
        default:
            return state;
    }
}



//* Action Creators --------------------------------------------------------->
type ActionsType = ReturnType<typeof searchBookAC> |  ReturnType<typeof selectBookAC>
    | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setPageCountAC >

export const searchBookAC = (bookAuthor: string) => ({type: 'SEARCH_BOOK', payload: bookAuthor} as const)
export const selectBookAC = (book: BookType) => ({type: 'CURRENT_BOOK', payload: book} as const)
export const setCurrentPageAC = (page: number) => ({type: 'SET_CURRENT_PAGE', payload: page} as const)
export const setPageCountAC = (pageCount: number) =>({type: 'SET_PAGE_COUNT', payload: pageCount} as const)
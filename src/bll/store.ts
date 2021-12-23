import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {booksReducer} from "./books-reducer";


const rootReducer = combineReducers({
    books: booksReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

//* Common thunk type
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>

//@ts-ignore
window.store = store
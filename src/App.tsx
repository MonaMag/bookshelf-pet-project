import React from 'react';
import { Route, Routes} from "react-router-dom";
import './App.css';
import AppContent from "./components/AppContent";
import {BooksList} from "./components/BooksList";
import {Book} from "./components/Book";
import {StartPage} from "./components/StartPage";


const App = () => {
    return (
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="/content" element={<AppContent/>}/>
                <Route path="/home" element={<App/>}/>
                <Route path="/bookslist" element={<BooksList/>}/>
                <Route path="/book" element={<Book/>}/>
            </Routes>
    );
};

export default App;
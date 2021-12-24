import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import AppContent from "./components/AppContent";
import {BooksList} from "./components/BooksList";
import {Book} from "./components/Book";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<AppContent/>}/>
            <Route path="/books" element={<BooksList/>}/>
            <Route path="/book" element={<Book/>}/>
        </Routes>
    );
};

export default AppRouter;
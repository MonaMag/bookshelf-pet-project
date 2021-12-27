import React from 'react';
import { Route, Routes} from "react-router-dom";
import './App.css';
import AppContent from "./components/appContent/AppContent";
import {BooksList} from "./components/appContent/main/BooksList";
import {StartPage} from "./components/startPage/StartPage";


const App = () => {
    console.log("APP")
    return (
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="/content" element={<AppContent/>}/>
                <Route path="/home" element={<App/>}/>
                <Route path="/bookslist" element={<BooksList/>}/>
            </Routes>
    );
};

export default App;
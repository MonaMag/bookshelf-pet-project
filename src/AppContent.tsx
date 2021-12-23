import React from 'react';
import { Route, Routes} from "react-router-dom";
import {BooksList} from "./components/BookList";




const AppRouter = () => {

    return (
            <div className='appStyle'>

                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<BooksList/>} />
                    </Routes>
                </div>
            </div>
    );
};

export default AppRouter;
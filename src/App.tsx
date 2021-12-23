import React from 'react';
import AppContent from "./AppContent";




const AppRouter = () => {

    return (
            <div className='appStyle'>
                    <img src="https://storage.googleapis.com/vst-chameleon-prod/multipart-1590182594-56034554973989-2"
                         alt="presentation" className='presentation'/>

                <button type='button' onClick={() => <AppContent/>}>Start</button>
            </div>
    );
};

export default AppRouter;
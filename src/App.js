import React from 'react';
import { Routes, Route} from "react-router-dom";
import WelcomePage from './WelcomePage';
import AboutMePage from './AboutMePage';
import PetPage from './PetPage';

function App(){
    return(
        <>
        <Routes>

            <Route path="/" element={<WelcomePage/>}/>

            <Route path="/aboutme" element={<AboutMePage/>}/>

            <Route path="/pets" element= {<PetPage/>}/>

        </Routes>
        </>
    )
}

export default App;
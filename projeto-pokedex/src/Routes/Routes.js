import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "../Pages/HomePage"
import DetailsPage from "../Pages/DetailsPage"
import PokedexPage from "../Pages/PokedexPage"

const RoutesPokedex = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/details" element={<DetailsPage/>}/>
                <Route path="/pokedex" element={<PokedexPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesPokedex
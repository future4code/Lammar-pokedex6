import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "../Pages/HomePage/HomePage"
import DetailsPage from "../Pages/DetailsPage/DetailsPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"

const RoutesPokedex = () => {
    const [pokedex, setPokedex] = useState([])
    const [pokemons, setPokemons] = useState([])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage pokedex={pokedex} setPokedex={setPokedex} pokemons={pokemons} setPokemons={setPokemons}/>}/>
                <Route path="/details/:id" element={<DetailsPage/>}/>
                <Route path="/pokedex" element={<PokedexPage pokedex={pokedex} setPokedex={setPokedex} pokemons={pokemons} setPokemons={setPokemons}/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesPokedex
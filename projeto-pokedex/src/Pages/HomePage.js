import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import * as MyRoutes from '../Routes/Coordinator'
import { base_url } from "../constants/constants";

function ShowHomePage () {

    const navigate = useNavigate()
    const [pokemonsList, isLoadingPokemonsList, errorPokemonsList] = useRequestData(`${base_url}pokemon/`)

    const renderPokemonsList = pokemonsList&&pokemonsList.results.map((pokemon) => {
        return <div key={pokemon.name}>
            <p> {pokemon.name} </p>
        </div>
    })
    return (
        <div>
            <h1> Página Inicial </h1>
            <button onClick={() => MyRoutes.goToPokedexPage(navigate)}> Ver Pokédex </button>
            {renderPokemonsList}
        </div>
    )
}

export default ShowHomePage
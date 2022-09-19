import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../../Routes/Coordinator'
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokemonList } from "./style";

function ShowPokedexPage ({pokedex,setPokedex}) {

    const navigate = useNavigate()

    const renderPokedex = pokedex && pokedex.map((pokemon) => {
        console.log(pokedex)
        return <PokemonCard
            key={pokemon.data.name}
            pokemon = {pokemon}
            />
    })

    return (
        <div>
            <h1> Pokédex </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar </button>
            <PokemonList>
                {renderPokedex}
            </PokemonList>
            
        </div>
    )
}

export default ShowPokedexPage
import React from "react";
import { Card, Buttons } from "./style";
import * as MyRoutes from '../../Routes/Coordinator'
import { useNavigate, useParams } from "react-router-dom";

export default function PokemonCard ({pokemon, addToPokedex}) {
    const navigate = useNavigate()
    
    return (
        <Card >
            <div> {pokemon.data.name} </div>
            <img src={pokemon.data.sprites.other.home.front_default} alt={pokemon.data.name}></img>
            <Buttons>
                <button onClick={() => addToPokedex(pokemon)}>Adicionar</button>
                <button onClick={() => MyRoutes.goToDetailsPage(navigate, pokemon.data.id)}>Ver detalhes</button>
            </Buttons>
            
        </Card>
    )
}
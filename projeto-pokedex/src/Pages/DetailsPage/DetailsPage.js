import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as MyRoutes from '../../Routes/Coordinator'
import axios from "axios";
import { base_url } from "../../constants/constants";
import { DivHeader, DivImagem, NavPai } from "./style";

function ShowDetailsPage() {

    const navigate = useNavigate()
    const pathParams = useParams()
    const [pokemonDetails, setPokemonDetails] = useState(undefined)
    const [pokemonTypes, setPokemonTypes] = useState(undefined)

    useEffect(() => {
        getPokemonDetails()
    }, [])

    const getPokemonDetails = () => {
        axios.get(`${base_url}${pathParams.id}`)
            .then((response) => {
                console.log(response)
                setPokemonDetails(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>
            <DivHeader>
                <h1> Página de detalhes do Pokémon </h1>
                    {pokemonDetails && <p> {pokemonDetails.name} </p>}
                <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar </button>
                <button> Adicionar/Remover da Pokédex </button>
            </DivHeader>
            <NavPai>
                <DivImagem>
                    {pokemonDetails && <img src={pokemonDetails.sprites.front_default}></img>}
                    {pokemonDetails && <img src={pokemonDetails.sprites.back_default}></img>}
                </DivImagem>

                <div>
                    <p> Poderes </p>
                    {pokemonDetails && <li> {pokemonDetails.stats[0].stat.name}: {pokemonDetails.stats[0].base_stat}</li>}
                    {pokemonDetails && <li> {pokemonDetails.stats[1].stat.name}: {pokemonDetails.stats[1].base_stat}</li>}
                    {pokemonDetails && <li> {pokemonDetails.stats[2].stat.name}: {pokemonDetails.stats[2].base_stat}</li>}
                    {pokemonDetails && <li> {pokemonDetails.stats[3].stat.name}: {pokemonDetails.stats[3].base_stat}</li>}
                    {pokemonDetails && <li> {pokemonDetails.stats[4].stat.name}: {pokemonDetails.stats[4].base_stat}</li>}
                    {pokemonDetails && <li> {pokemonDetails.stats[5].stat.name}: {pokemonDetails.stats[5].base_stat}</li>}
                </div>

                <div>
                    <p> Tipo </p>
                    {pokemonDetails && <li> {pokemonDetails.types[0].type.name}</li>}

                </div>

                <div>
                    <p> Principais Ataques </p>
                    {pokemonDetails && <li> {pokemonDetails.moves[0].move.name}</li>}
                    {pokemonDetails && <li> {pokemonDetails.moves[1].move.name}</li>}
                    {pokemonDetails && <li> {pokemonDetails.moves[2].move.name}</li>}
                    {pokemonDetails && <li> {pokemonDetails.moves[3].move.name}</li>}
                </div>
            </NavPai>



        </div>
    )
}

export default ShowDetailsPage
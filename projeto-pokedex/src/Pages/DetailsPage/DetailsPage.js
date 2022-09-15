import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as MyRoutes from '../../Routes/Coordinator'
import axios from "axios";
import { base_url } from "../../constants/constants";
import { DivHeader, DivImagem, Details, CardDetails} from "./style";

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
        <Details>

            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar </button>

            <h1>{pokemonDetails && <p> {pokemonDetails.name.toUpperCase()} </p>}</h1><br />

            <CardDetails>
                <DivImagem>
                    {pokemonDetails && <img src={pokemonDetails.sprites.versions["generation-v"]["black-white"].animated.front_default}></img>}
                    {pokemonDetails && <img src={pokemonDetails.sprites.versions["generation-v"]["black-white"].animated.back_default}></img>}
                </DivImagem>

                <span>

                    <b><p> Poderes </p></b>
                    {pokemonDetails && <li> {pokemonDetails.stats[0].stat.name}: {pokemonDetails.stats[0].base_stat}</li>}
                    {pokemonDetails && <li> {pokemonDetails.stats[1].stat.name}: {pokemonDetails.stats[1].base_stat}</li>}
                    {pokemonDetails && <li> {pokemonDetails.stats[2].stat.name}: {pokemonDetails.stats[2].base_stat}</li>}
                    {pokemonDetails && <li> {pokemonDetails.stats[3].stat.name}: {pokemonDetails.stats[3].base_stat}</li>}
                    {pokemonDetails && <li> {pokemonDetails.stats[4].stat.name}: {pokemonDetails.stats[4].base_stat}</li>}
                    {pokemonDetails && <li> {pokemonDetails.stats[5].stat.name}: {pokemonDetails.stats[5].base_stat}</li>}
                </span>

                <span>
                    <b><p> Tipo </p></b>

                    {pokemonDetails &&  pokemonDetails.types.map((type) => { 
                        return (
                            <li key={type.type.name}> {type.type.name} </li>
                        )
                    })}

                </span>

                <span>
                    <b><p> Principais Ataques </p></b>
                    {pokemonDetails && <li> {pokemonDetails.moves[0].move.name}</li>}
                    {pokemonDetails && <li> {pokemonDetails.moves[1].move.name}</li>}
                    {pokemonDetails && <li> {pokemonDetails.moves[2].move.name}</li>}
                    {pokemonDetails && <li> {pokemonDetails.moves[3].move.name}</li>}
                </span>
            </CardDetails>
            <button> Adicionar/Remover da Pokédex </button>

        </Details>

    )
}

export default ShowDetailsPage
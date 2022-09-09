import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import * as MyRoutes from '../../Routes/Coordinator'
import { base_url } from "../../constants/constants";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import axios from "axios";
import { PokemonList, HomePage, LoadingIcon} from "./style";
import Loading from 'react-loading'

function ShowHomePage () {

    const navigate = useNavigate()
    const [pokemons, setPokemons] = useState([])
    const [loadingPokemons, setLoadingPokemons] = useState(undefined)

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        setLoadingPokemons(true)
        let endpoints = [];
        for (let i=1; i<=20; i++) {
            endpoints.push(`${base_url}${i}/`)
        }
        console.log(endpoints)

        return axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => {
                console.log(res)
                setPokemons(res)
                setLoadingPokemons(false)
            })
            .catch ((error) => {
                console.log(error)
                setLoadingPokemons(false)
            })
        
    }
    

    const renderPokemonsList = pokemons&&pokemons.map((pokemon) => {
        return <PokemonCard 
        key={pokemon.data.name} 
        name={pokemon.data.name} 
        image={pokemon.data.sprites.front_default} 
        alt={pokemon.data.name}
        id={pokemon.data.id}/>
    })


    return (
        <HomePage>
            <h1> Página Inicial </h1>
            <button onClick={() => MyRoutes.goToPokedexPage(navigate)}> Ver Pokédex </button>
            <LoadingIcon>{loadingPokemons && <Loading type={"spinningBubbles"} color={"red"} height={'10%'} width={'10%'} />}</LoadingIcon>           
            <PokemonList>
                {!loadingPokemons && renderPokemonsList}
            </PokemonList>
        </HomePage>
    )
}

export default ShowHomePage
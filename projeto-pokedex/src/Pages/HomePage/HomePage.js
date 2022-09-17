import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import * as MyRoutes from '../../Routes/Coordinator'
import { base_url } from "../../constants/constants";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import axios from "axios";
import { PokemonList, HomePage, LoadingIcon, Button } from "./style";
import Loading from 'react-loading'


function ShowHomePage({pokedex, setPokedex, pokemons, setPokemons}) {

    const navigate = useNavigate()
    
    const [loadingPokemons, setLoadingPokemons] = useState(undefined)

    const addToPokedex = (pokemon) => {
        const newPokedex = [...pokedex]
        newPokedex.push({...pokemon})
        setPokedex(newPokedex)

        const newPokemonList = [...pokemons]
        const index = newPokemonList.indexOf(pokemon)
        newPokemonList.splice(index, 1)
        setPokemons(newPokemonList)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        setLoadingPokemons(true)
        let endpoints = [];
        for (let i = 1; i <= 20; i++) {
            endpoints.push(`${base_url}${i}/`)
        }
        console.log(endpoints)

        return axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => {
                console.log(res)
                setPokemons(res)
                setLoadingPokemons(false)
            })
            .catch((error) => {
                console.log(error)
                setLoadingPokemons(false)
            })

    }


    const renderPokemonsList = pokemons && pokemons.map((pokemon) => {
        return <PokemonCard
            key={pokemon.data.name}
            pokemon = {pokemon}
            addToPokedex= {addToPokedex}/>
    })


    return (
        <HomePage>


            <Button onClick={() => MyRoutes.goToPokedexPage(navigate)}> Ver Pokédex </Button>

            <LoadingIcon>{loadingPokemons && <Loading type={"spinningBubbles"} color={"red"} height={'10%'} width={'10%'} />}</LoadingIcon>
            <PokemonList>
                {!loadingPokemons && renderPokemonsList}
            </PokemonList>

        </HomePage>
    )
}

export default ShowHomePage
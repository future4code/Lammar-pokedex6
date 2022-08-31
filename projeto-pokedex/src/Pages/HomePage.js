import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../Routes/Coordinator'

function ShowHomePage () {

    const navigate = useNavigate()

    return (
        <div>
            <h1> Página Inicial </h1>
            <button onClick={() => MyRoutes.goToPokedexPage(navigate)}> Ver Pokédex </button>
        </div>
    )
}

export default ShowHomePage
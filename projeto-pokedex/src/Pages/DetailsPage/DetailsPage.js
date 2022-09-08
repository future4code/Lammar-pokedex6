import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../../Routes/Coordinator'

function ShowDetailsPage () {

    const navigate = useNavigate()

    return (
        <div>
            <h1> Página de detalhes do Pokémon </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar </button>
            <button> Adicionar/Remover da Pokédex </button>
        </div>
    )
}

export default ShowDetailsPage
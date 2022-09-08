import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../../Routes/Coordinator'

function ShowHomePage () {

    const navigate = useNavigate()

    return (
        <div>
            <h1> Pokédex </h1>
            <button onClick={() => MyRoutes.returnToLastPage(navigate)}> Voltar </button>
        </div>
    )
}

export default ShowHomePage
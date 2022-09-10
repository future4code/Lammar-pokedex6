import React from "react";
import { Card } from "./style";
import * as MyRoutes from '../../Routes/Coordinator'
import { useNavigate, useParams } from "react-router-dom";

export default function PokemonCard ({name, image, id}) {
    const navigate = useNavigate()
    return (
        <Card >
            <div> {name} </div>
            <img src={image} alt={name}></img>
            <button>Adicionar</button>
            <button onClick={() => MyRoutes.goToDetailsPage(navigate, id)}>Ver detalhes</button>
        </Card>
    )
}
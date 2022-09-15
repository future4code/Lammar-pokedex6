import React from "react";
import { Card, Buttons } from "./style";
import * as MyRoutes from '../../Routes/Coordinator'
import { useNavigate, useParams } from "react-router-dom";

export default function PokemonCard ({name, image, id}) {
    const navigate = useNavigate()
    return (
        <Card >
            <div> {name} </div>
            <img src={image} alt={name}></img>
            <Buttons>
                <button>Adicionar</button>
                <button onClick={() => MyRoutes.goToDetailsPage(navigate, id)}>Ver detalhes</button>
            </Buttons>
            
        </Card>
    )
}
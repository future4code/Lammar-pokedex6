import React from "react";
import { Card } from "./style";

export default function PokemonCard ({name, image}) {
    return (
        <Card>
            <div> {name} </div>
            <img src={image} alt={name}></img>
            <button>Adicionar</button>
            <button>Ver detalhes</button>
        </Card>
    )
}
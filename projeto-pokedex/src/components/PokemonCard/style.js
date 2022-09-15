import styled from 'styled-components'

export const Card = styled.div `
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 1em;
    min-width: fit-content;
    width: 10%;
    text-align: center;
    margin: 1em;
    background-color:whitesmoke;
    padding:2px;
    align-content: center;  
    justify-content: center;
    align-items: center;

    img {
        max-width: fit-content;
        width: 15vw;
    }

    button {
        border-radius: 2em;
        width: fit-content;
        padding-right: 1em;
        padding-left: 1em;
    }

    div {
        font-size: 1em;
    }

`
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
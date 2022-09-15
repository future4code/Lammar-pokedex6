import styled from "styled-components";

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

`

export  const DivImagem = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-self: center;
    size-adjust:80px;
    justify-content: center;
    align-items: center;

    img {
        width: 10vw;
    }
`

export const CardDetails = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-self: center;
    border: 2px solid black;
    min-width: fit-content;
    width: 60%;
    height:40%;
    text-align: center;
    margin-right: 25%;
    margin-left: 25%;
    margin-bottom: 1%;
    background-color:whitesmoke;
    padding:2px;
    font-size: 20px;

    span {
        border: 1px solid black;
    }

    li {
        list-style-type: none;
        text-align: left;   
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
`
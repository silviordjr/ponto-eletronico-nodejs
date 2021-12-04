import styled from "styled-components"

export const Input = styled.input`
    height: 5vw;
    width: 25vw;
    border: none;
    margin-bottom: 2vh;
    margin-right: 2vw;
    border-radius: 8px;
    background-color: lightgray;
    color: #111111;
    @media(max-width: 800px){
        height: 6vh;
        width: 75vw;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`

export const MainContainerForm = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        text-align: center;
    }
`

export const ContainerSelect = styled.div `
    h4{
        text-align: center;
    }

    label {
        margin-left: 1vw;
    }

    input {
        margin-right: 1vw;
    }
`

export const Button = styled.button`
    height: 5vw;
    width: 25vw;
    border: none;
    margin-bottom: 2vh;
    margin-right: 0vw;  
    border-radius: 8px;
    background-color: lightblue;
    color: #111111;
    margin-top: 6vh;
    :hover{
        cursor: pointer;
        background-color: #4682B4;
    }
    :active{
        background-color: #3b5998;
    }
    @media(max-width: 800px){
        width: 76vw;
        height: 6vh;
        margin-bottom: 4vh;
        margin-top: 4vh;
    }
`
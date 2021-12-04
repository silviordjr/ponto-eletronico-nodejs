import styled from "styled-components";

export const MainDetail = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        text-align: center;
    }
`

export const ContainerInfoDetail = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 10vw;
    margin-left: 10vw;
    h4{
        color: lemonchiffon;
        margin-right: 1vw;
    }

    div{
        min-width: 5vw;
        display: flex;
        align-items: center;
        margin-bottom: 4vh;
        margin-left: 2vw;
        margin-right: 2vw;

        p{
            margin-right: 2vw;
        }
    }

    @media(max-width: 800px){
        flex-direction: column;
    }
`

export const Button = styled.button`
    height: 5vw;
    width: 40vw;
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
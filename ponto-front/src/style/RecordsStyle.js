import styled from 'styled-components'

export const MainCard = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: black;
    width: 85vw;
    height: 8vh;
    margin-top: 4vh;

    :hover{
        cursor: pointer;
        width: 90vw;
    }

    @media(max-width: 800px){
        flex-direction: column;
        height: 40vh;
        width: 45vw;
        margin-right: 0;
        margin-left: 0;
    }
`

export const ContainerCards = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4vh;

    @media(max-width: 800px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 0;
    p{
        margin: 0;
    }
`

export const MainContainerRegistros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
        height: 4vw;
        width: 12vw;
        border: none;
        margin-top: 1vh;
        margin-left: 2vw;
        border-radius: 8px;
        background-color: lightgray;
        color: #111111;
    
        @media(max-width: 800px){
            height: 6vh;
            width: 75vw;
        }
    }

    h3 {
        text-align: center;
    }

    @media(max-width: 800px){
        flex-direction: column;
    }
`


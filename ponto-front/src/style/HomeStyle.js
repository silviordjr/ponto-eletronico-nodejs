import styled from 'styled-components'

export const MainHome = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 87vh;

    h1{
        text-align: center;
    }

    h3{
        text-align: center;
    }

    button{
        margin-top: 8vh;
        margin-left: 3vw;
        margin-right: 3vw;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ghostwhite;
        color: ghostwhite;
        font-size: 28px;
        :hover{
            background-color: ghostwhite;
            color: #111111;
            cursor: pointer
        }
        :active{
            background-color: lightgray;
            border-bottom: 1px solid lightgray;
            color: #111111;
        }
    }

`
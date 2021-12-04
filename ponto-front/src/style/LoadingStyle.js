import styled, {keyframes} from 'styled-components'

const ldsdualring = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`

export const MainLoading = styled.div`
    display: inline-block;
    width: 100vw;
    height: 87vh;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    ::after{
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: ${ldsdualring} 1.2s linear infinite;
    }

`

import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToForm, goToRecords } from '../routes/coordinator'
import { MainHome } from '../style/HomeStyle'

function HomePage () {
    const history = useHistory()
    return (
        <MainHome>
            <h1>Bem-vindo ao formulário de cadastro!</h1>
            <h3>Clique nos botões abaixo para acessar o formulário ou para visualizar os cadastros existentes.</h3>
            <div>
                <button onClick={() => goToForm(history)} >Formulário</button>
                <button onClick={() => goToRecords(history)} >Registros</button>
            </div>
        </MainHome>
    )
}

export default HomePage
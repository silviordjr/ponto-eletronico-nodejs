import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToError, goToRecordDetail } from '../routes/coordinator'
import { ContainerCards, ContainerInfo, ContainerInput, MainCard, MainContainerRegistros } from '../style/RecordsStyle'
import LoadingPage from './LoadingPage'

function RecordsPage () {
    const [records, setRecords] = useState([])
    const [name, setName] = useState('')
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get('http://localhost:3003/registros')
        .then((res) => {
            setRecords(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            alert(`Ops.. Algo deu errado: \n ${err.response}`)
            setIsLoading(false)
            goToError(history)
        })
    }, [])


    const filtrarRecords = (event) => {
        setName(event.target.value)

        axios.get(`http://localhost:3003/registros?search=${name}`)
        .then((res) => {
            setRecords(res.data)
        })
        .catch((err) => {
            alert(`Ops.. Algo deu errado: \n ${err.response}`)
            goToError(history)
        })
    }

    const RenderizaRecords = records.map((record) => {
        return(
            <MainCard onClick={() => goToRecordDetail(history, record.id)} >
                <ContainerInfo>
                    <p>Nome</p>
                    {record.nome}
                </ContainerInfo>
                <ContainerInfo>
                    <p>E-mail</p>
                    {record.email}
                </ContainerInfo>
                <ContainerInfo>
                    <p>CPF</p>
                    {record.cpf}
                </ContainerInfo>
                <ContainerInfo>
                    <p>Primeiro Conhecimento</p>
                    {record.conhecimento_1}
                </ContainerInfo>
                <ContainerInfo>
                    <p>Status</p>
                    {record.status}
                </ContainerInfo>
            </MainCard>
        )
    })
    return (
        <div>
        {isLoading ?
        <LoadingPage />
        :
        (<MainContainerRegistros>
            <ContainerInput>
                <h3>Clique em um registro para validá-lo ou procure por algum registro usando o filtro por nome.</h3>
                <input placeholder='Nome' value={name} onChange={filtrarRecords} />
            </ContainerInput>
            <ContainerCards>
                {RenderizaRecords}
            </ContainerCards>
        </MainContainerRegistros>)}
        </div>
    )
}

export default RecordsPage
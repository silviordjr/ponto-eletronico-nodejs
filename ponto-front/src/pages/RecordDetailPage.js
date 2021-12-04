import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, MainDetail } from '../style/RecordDetailStyle'
import { ContainerInfoDetail } from '../style/RecordDetailStyle'
import { useHistory } from 'react-router-dom'
import { goToError, goToRecords } from '../routes/coordinator'
import LoadingPage from './LoadingPage'

function RecordDetailPage () {
    const params = useParams()
    const [record, setRecord] = useState({})
    const recordId = params.id
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:3003/registros/${recordId}`)
        .then((res) => {
            setRecord(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            alert(`Ops.. Algo deu errado: \n ${err.response}`)
            setIsLoading(false)
            goToError(history)
        })
    }, [])
    
    const validarRegistro = () => {
        if (window.confirm("Deseja validar o registro?")){
            setIsLoading(true)
            axios.put(`http://localhost:3003/validar/${recordId}`)
            .then((res) => {
                alert("Registro Validado")
                setIsLoading(false)
                goToRecords(history)
            })
            .catch((err) => {
                alert(`Ops.. Algo deu errado: \n ${err.response}`)
                setIsLoading(false)
                goToError(history)
            })
        }
    }
    return (
        <div>
        {isLoading ?
        <LoadingPage />
        :
        (<MainDetail>
            <h1>Informações do Registro:</h1>
            {record && 
            <div>
                <ContainerInfoDetail>
                    <div>
                    <h4>Nome:</h4>
                    {record.nome}
                    </div>
                    <div>
                    <h4>E-mail:</h4>
                    {record.email}
                    </div>
                    <div>
                    <h4>CPF:</h4>
                    {record.cpf}
                    </div>
                </ContainerInfoDetail>
                <ContainerInfoDetail>
                    <div>
                    <h4>Conhecimentos:</h4>
                    <p>{record.conhecimento_1}</p>
                    <p>{record.conhecimento_2 && record.conhecimento_2}</p>
                    <p>{record.conhecimento_3 && record.conhecimento_3}</p>
                    </div>
                </ContainerInfoDetail>
                <ContainerInfoDetail>
                    <div>
                    <h4>Contato:</h4>
                    {(record.celular) ?
                    (record.celular) : "Não cadastrado."}
                    </div>
                    <div>
                    <h4>Status:</h4>
                    {record.status}
                    </div>
                    <div>
                    <h4>Validado em:</h4>
                    {record.validado_data ?
                    (record.validado_data): (record.status)}
                    </div>
                </ContainerInfoDetail>
            </div>
            }
            <Button onClick={validarRegistro} >Validar</Button>
        </MainDetail>)}
        </div>
    )
}

export default RecordDetailPage
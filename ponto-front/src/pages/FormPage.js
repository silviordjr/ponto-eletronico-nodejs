import React, { useState } from 'react'
import InputMask from 'react-input-mask';
import { useForm } from '../hooks/useForm';
import { ContainerSelect, Form, Input, MainContainerForm, Button } from '../style/FormStyle';
import { cpf } from 'cpf-cnpj-validator';
import validator from 'validator';
import axios from 'axios';
import { goToError, goToRecords } from '../routes/coordinator';
import { useHistory } from 'react-router-dom';
import LoadingPage from './LoadingPage';


function FormPage () {
    const [form, onChange, clear] = useForm({
        nome: "",
        email: "",
        cpf: "",
        celular: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [conhecimentos, setConhecimentos] = useState([])
    const [conhecimentosLimite, setConhecimentosLimite] = useState(false)
    const [invalidCpf, setInvalidCpf] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [semConhecimento, setSemConhecimento] = useState(false)
    const history = useHistory()

    const validaCpf = () => {
        if (!cpf.isValid(form.cpf.replace(/[^0-9]/g, ''))){
            setInvalidCpf(true)
        } else{
            setInvalidCpf(false)
        }
    }

    const validaEmail = () => {
        if(!validator.isEmail(form.email)){
            setInvalidEmail(true)
        } else{
            setInvalidEmail(false)
        }
    }
    const onChangeSelect = (event) => {

        if (conhecimentos.length < 3){
            let index = conhecimentos.indexOf(event.target.value)

            if (index === -1){
                let novaArray = [... conhecimentos, event.target.value]
                setConhecimentos(novaArray)
            } else {
                let novaArray = [... conhecimentos]
                novaArray.splice(index, 1)
                setConhecimentos(novaArray)
                }
        } else {
            let index = conhecimentos.indexOf(event.target.value)

            if (index !== -1){
                let novaArray = [... conhecimentos]
                novaArray.splice(index, 1)
                setConhecimentos(novaArray)
            }
        }

        if ((conhecimentos.length + 1) > 3) {
            setConhecimentosLimite(true)
        } else {
            setConhecimentosLimite(false)
        }
    }

    const realizaCadastro = (event) => {
        event.preventDefault()

        let cadastro = {
            nome: form.nome,
            email: form.email,
            cpf: form.cpf.replace(/[^0-9]/g, ''),
            celular: form.celular.replace(/[^0-9]/g, ''),
            conhecimento1: conhecimentos[0], 
            conhecimento2: conhecimentos[1],
            conhecimento3: conhecimentos[3]
        }

        if (!cpf.isValid(form.cpf.replace(/[^0-9]/g, ''))){
            alert("Insira um CPF válido!")
        } else if (!validator.isEmail(form.email)){
            alert('Insira um e-mail válido!')
        } else if (conhecimentos.length === 0){
            setSemConhecimento(true)
        } else{
            setIsLoading(true)
            axios.post('http://localhost:3003/registrar', cadastro)
            .then((res) => {
                alert('Cadastro realizado com sucesso!')
                clear()
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

    const verificaPresenca = (value) => {
        const indexValue = conhecimentos.indexOf(value)

        if (indexValue === -1){
            return true
        } else{
            return false
        }
    }
   
    return (
        <div>
            {isLoading ?
            <LoadingPage />
        :
        (<MainContainerForm>

            <h1>Preencha os campos para realizar o seu cadastro</h1>

            <Form  onSubmit={realizaCadastro}>
                <Input placeholder='Nome' value={form.nome} onChange={onChange} required name="nome" />

                {invalidEmail && <p>Você deve informar um E-mail válido!</p>}
                <Input placeholder="E-mail" value={form.email} onChange={onChange} required name="email" type='email' onBlur={validaEmail}/>

                {invalidCpf && <p>Você deve informar um CPF válido!</p>}
                <InputMask mask="999.999.999-99" maskChar=" " value={form.cpf} onChange={onChange} name="cpf" onBlur={validaCpf}>
                    {(inputProps) => <Input placeholder="CPF" required name="cpf" />}
                </InputMask>

                <InputMask mask="(99) 99999-9999" maskChar=" " value={form.celular} onChange={onChange} name="celular">
                    {(inputProps) => <Input placeholder="Celular"  name="celular" />}
                </InputMask>

                <ContainerSelect>
                    <h4>Selecione de 1 a 3 conhecimentos:</h4>
                    {conhecimentosLimite && <p>Você pode selecionar no máximo três conhecimentos!</p>}
                    {semConhecimento && <p>Você deve selecionar pelo menos um conhecimento!</p>}

                    <label for='Git'>Git</label>
                    <input type='checkbox' id='Git' value='Git' onChange={onChangeSelect} disabled={conhecimentosLimite && verificaPresenca('Git')} />

                    <label for='React'>React</label>
                    <input type='checkbox' id='React' value='React' onChange={onChangeSelect} disabled={conhecimentosLimite && verificaPresenca('React')}/>

                    <label for='PHP'>PHP</label>
                    <input type='checkbox' id='PHP' value='PHP' onChange={onChangeSelect} disabled={conhecimentosLimite && verificaPresenca('PHP')} />

                    <label for='NodeJS'>NodeJS</label>
                    <input type='checkbox' id='NodeJS' value='NodeJS' onChange={onChangeSelect} disabled={conhecimentosLimite && verificaPresenca('NodeJS')}/>

                    <label for='DevOps'>DevOps</label>
                    <input type='checkbox' id='DevOps' value='DevOps' onChange={onChangeSelect} disabled={conhecimentosLimite && verificaPresenca('DevOps')}/>

                    <label for='Banco de Dados'>Banco de Dados</label>
                    <input type='checkbox' id='Banco de Dados' value='Banco de Dados' onChange={onChangeSelect} disabled={conhecimentosLimite && verificaPresenca('Banco de Dados')}/>

                    <label for='TypeScript'>TypeScript</label>
                    <input type='checkbox' id='TypeScript' value='TypeScript' onChange={onChangeSelect} disabled={conhecimentosLimite && verificaPresenca('TypeScript')}/>

                </ContainerSelect>

                <Button>Enviar</Button>
            </Form>
            
        </MainContainerForm>)}
        </div>
    )
}

export default FormPage
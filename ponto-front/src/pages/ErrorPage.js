import React from 'react'
import { MainError } from '../style/ErrorStyle'

function ErrorPage () {
    return (
        <MainError>
            <h1>Ops... Algo deu errado por aqui!</h1>
            <ol>
                <li>Verifique se o endereço passado para a página está correto. Nessa página de testes, temos os endereços:</li>
                    <ol>
                        <li>'/', que irá para Home Page.</li>
                        <li>'/registrar', que irá para a página do formulário de registros.</li>
                        <li>'/registros', que irá para a página de visualização dos registros.</li>
                        <li>`/validar/:id`, que recebe como parametro a id de uma requisição e irá para a página de validação da mesma.</li>
                    </ol>
                <li>Verifique se a API está rodando na porta 3003.</li>
                    <ol>
                        <li>Se você estiver dentro da pasta principal, entre na pasta 'ponto-api'.</li>
                        <li>Dentro da pasta 'ponto-api', no bash, rode o comando: npm run dev</li>
                    </ol>
                <li>Você ainda pode navegar pela aplicação a partir dos botões disponíveis no Header dessa página.</li>
            </ol>
        </MainError>
    )
}

export default ErrorPage
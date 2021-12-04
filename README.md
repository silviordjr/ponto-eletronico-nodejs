# ponto-eletronico-nodejs


<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🔗 React</a>
</h1>

<p>Tela de cadastro para as solicitações, contendo os campos:
  <ol>
    <li>Nome</li>
    <li>E-mail</li>
    <li>CPF</li>
    <li>Celular</li>
  </ol>
  A API da ferramenta se encontra na pasta ponto-api, já o front-end está na pasta ponto-front.
  
  Na página, são verificados os dados de CPF e o e-mail, tanto pelo front quanto pela API. Além disso, há uma tela para listar todas as solicitações e funcionalidade para aprovar uma solicitação.
  
  No ariquivo ponto-api, para criar as tabelas em uma base de dados MySql, basta rodar, no node, o comando npm run migrations. A tabela será criada e copulada com alguns dados. Após isso, para iniciar o servidor, basta rodas, também no bash, o comando npm run dev, e o servidor será inicializado na porta 3003.
</p>

<h4 align="center"> 
	🚧  React Select 🚀 Finalizado.
</h4>

### 🛠 Tecnologias e Ferramentas

As seguintes ferramentas foram usadas na construção do front-end:

- [React](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Cpf-cnpj-validator](https://www.npmjs.com/package/cpf-cnpj-validator)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Styled-components](https://styled-components.com/)
- [Validator](https://www.npmjs.com/package/validator)
- [React-input-mask](https://www.npmjs.com/package/react-input-mask)

Já na API, foram usados:
- [Cpf-cnpj-validator](https://www.npmjs.com/package/cpf-cnpj-validator)
- [Knex](https://knexjs.org/)
- [mysql](https://www.npmjs.com/package/mysql)
- [Express](https://expressjs.com/pt-br/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [TypeScript](https://www.typescriptlang.org/)


### Importante

Ao rodar a aplicação React, verifique se a API está devidamente rodando na porta 3003. Sem isso, as requisições não poderão ser realizadas.

### Responsividade

O projeto foi realizado desktop first, com responsividade otimizada para iPhone 6/7/8.



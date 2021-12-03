import connection from "./connection"
import users from "./users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
CREATE TABLE Formulario_Registro (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(100) UNIQUE  NOT NULL,
    email VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    celular VARCHAR(15),
    conhecimento_1 ENUM("Git", "React", "PHP", "NodeJS", "DevOps", "Banco de Dados", "TypeScript") NOT NULL,
    conhecimento_2 ENUM("Git", "React", "PHP", "NodeJS", "DevOps", "Banco de Dados", "TypeScript"),
    conhecimento_3 ENUM("Git", "React", "PHP", "NodeJS", "DevOps", "Banco de Dados", "TypeScript"),
    status ENUM('Validado', 'Não Validado') DEFAULT 'Não Validado'),
    validado_data DATETIME;
`)
.then(() => {
    console.log('tabelas criadas.')
})
.catch(printError)

const insertData = () => connection ('Formulario_Registro')
.insert(users)
.then(() => {
    console.log('Usuários criados!')
})
.catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
    .then(insertData)
    .finally(closeConnection)
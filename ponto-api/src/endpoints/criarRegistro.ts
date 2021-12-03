import { Request, Response } from "express";
import connection from "../data/connection";
import { cpf } from 'cpf-cnpj-validator';

const criarRegistro = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!cpf.isValid(req.body.cpf)){
            throw new Error ('CPF não válido!')
        }
    
        const id = req.body.nome.replace(/\s+/g, '').normalize("NFD").toUpperCase()
        const cpf_user = cpf.format(req.body.cpf)

        let celular
        if (req.body.celular){
            celular = req.body.celular.replace(/^(\d\d)(\d)/g,"($1) $2").replace(/(\d{5})(\d)/,"$1-$2")
        }
    
        await connection ('Formulario_Registro')
            .insert({
                id: id,
                nome: req.body.nome,
                email: req.body.email,
                cpf: cpf_user,
                celular: celular,
                conhecimento_1: req.body.conhecimento1,
                conhecimento_2: req.body.conhecimento2,
                conhecimento_3: req.body.conhecimento3
            })

        
        res.status(200).send('Cadastro realizado!')

    } catch (error: any){
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export default criarRegistro
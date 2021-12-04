import { Request, Response } from "express";
import connection from "../data/connection";

const pegarUser = async(req: Request, res: Response): Promise<void> => {
    try{
        const user = await connection ('Formulario_Registro')
            .where('id', "=",  req.params.id)
        
        if (user.length === 0){
            throw new Error ('Nenhum usuário encontrado!')
        }

        res.status(200).send(user[0])

    } catch (error: any){
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export default pegarUser
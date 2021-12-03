import { Request, Response } from "express";
import connection from "../data/connection";

const pegarRegistros = async (req: Request, res: Response): Promise<void> => {
    try{
        const search = req.query.search || '%'

        const registros = await connection ('Formulario_Registro')
            .where('nome', "LIKE" , `%${search}%`)
            .orderBy('nome', `ASC`)
        
        if (registros.length === 0){
            throw new Error ("Nenhum registro encontrado!")
        }
        
        res.status(200).send(registros)

    } catch (error: any){
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export default pegarRegistros
import { Request, Response } from "express";
import connection from "../data/connection";

const validarRegistro = async(req: Request, res: Response): Promise<void> => {
    try {

        const data = new Date().toISOString().slice(0, 19).replace('T', ' ');

        await connection ('Formulario_Registro')
            .where('id', "=", req.params.id)
            .update({
                status: "Validado",
                validado_data: data
            })
        
            res.status(201).send("Validação Confirmada!")

    } catch (error: any){
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

export default validarRegistro
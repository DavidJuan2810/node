import {pool} from "../database/conexionBD.js"

export const listarLotes = async (req,res)=>{
    try{
        const sql = "SELECT * FROM Lotes"
        const [result]= await pool.query(sql)
        if (result.length >0){
            return res.status(200).json(result)
        }
        else{
            return res.status(404).json({"message":"No hay lotes registrados"})
        }
    }catch(error){
        console.error(error)
        return res.status(500).json({"message":"Error en el servidor"})
    }
}
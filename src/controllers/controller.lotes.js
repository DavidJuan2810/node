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

export const registrarLote = async (req,res)=>{
    try{
        const {nombre, descripcion, activo, TamX, TamY, posY, posX}=req.body
        const sql = `INSERT INTO Lotes (nombre, descripcion, activo, TamX, TamY, posY, posX) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const [rows]= await pool.query(sql,[nombre, descripcion, activo, TamX, TamY, posY, posX]);

        if(rows.affectedRows>0)
            return res.status(200).json({"message":"Lote registrado"})
        else{
            res.status(400).json({"message":"Error al registrar lotes"})
        }
    }catch(error){
        console.error(error)
        return res.status(500).json({"message":"Error en el servidor"})
    }
}
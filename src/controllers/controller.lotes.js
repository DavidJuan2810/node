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

export const verLote = async (req,res) => {
    try{
        const id = req.params.id_lote;
        const sql = " SELECT * FROM Lotes WHERE id_lote = ?";
        const [result] = await pool.query(sql, [id]);

        if (result.length > 0){
            return res.status(200).json({msg: "lotes:", result});
        }
        return res.status(404).json({"message":"No se encontro el lote"});
    } catch (error){
        console.error(error);
        return res.status(500).json({"message":"Error en el servidor"});
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

export const actualizarLote = async (req, res) => {
    try{
        const {nombre, descripcion, activo, TamX, TamY, posY, posX}=req.body
        const id = req.params.id_lote;

        if (!id) {
            return res.status(400).json({"message":"no se encontro un id de lote valido"});
        }
        const sql = `UPDATE Lotes SET nombre = ?, descripcion = ?, activo = ?, TamX = ?, TamY = ?, posY =?, posX =?
        WHERE id_lote = ?`;
        const [rows] = await pool.query(sql, [nombre, descripcion, activo, TamX, TamY, posY, posX, id]);

        if (rows.affectedRows > 0 ){
            return res.status(200).json({"message":"Lote actualizado correctamente."});
        }else {
            return res.status(404).json({"message":"no se encontro el lote"});
        }
    }catch (error){
        console.error(error)
        return res.status(500).json({"message":"Error en el servidor"});
    }
}

export const eliminarLote = async (req, res) => {
    try{
        const id = req.params.id_lote;
        if(!id){
            return res.status(400).json({"message":"Informacion invalida"});
        }
        const sql = `DELETE FROM Lotes WHERE id_lote = ?`;
        const [rows] = await pool.query(sql, [id]);

        if (rows.affectedRows > 0){
            return res.status(200).json({"message":"Lote eliminado correctamente."});
        }else {
            return res.status(404).json({"message":"No se encontro el lote"})
        }
    }catch (error) {
        console.error(error)
        return res.status(500).json({"message":"Error en el servidor"});
    }
}
import { Router } from "express";
import { listarLotes, verLote, registrarLote, actualizarLote, eliminarLote } from "../controllers/controller.lotes.js";
const rutaLote = Router()

rutaLote.get("/lotes", listarLotes);
rutaLote.get("/lotes/:id_lote", verLote);
rutaLote.post("/lotes",registrarLote);
rutaLote.put("/lotes/:id_lote", actualizarLote);
rutaLote.delete("/lotes/:id_lote",eliminarLote);


export default rutaLote;
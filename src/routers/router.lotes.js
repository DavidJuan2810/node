import { Router } from "express";
import { listarLotes, registrarLote } from "../controllers/controller.lotes.js";
const rutaLote = Router()

rutaLote.get("/lotes", listarLotes);
rutaLote.post("/lotes",registrarLote);

export default rutaLote;
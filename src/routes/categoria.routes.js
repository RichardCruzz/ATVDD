import { Router } from "express";
import  categoriaControllers  from "../controllers/categoriaController.js";

const categoriaRoutes = Router();

categoriaRoutes.get("/", categoriaController.listarCategorias);
categoriaRoutes.get("/:id", categoriaController.selecionarCategoria);
categoriaRoutes.post("/", categoriaController.criarCategoria);
categoriaRoutes.put("/:id", categoriaController.editarCategoria);
categoriaRoutes.delete("/:id", categoriaController.excluirCategoria);

export default categoriaRoutes;
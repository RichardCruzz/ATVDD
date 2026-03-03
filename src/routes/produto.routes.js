import { Router } from "express";
import { produtoController } from "../controllers/produtoController.js";

const produtoRoutes = Router();

produtoRoutes.get("/", produtoController.listarProdutos);
produtoRoutes.get("/:id", produtoController.selecionarProduto);
produtoRoutes.post("/", produtoController.criarProduto);
produtoRoutes.put("/:id", produtoController.editarProduto);
produtoRoutes.delete("/:id", produtoController.excluirProduto);

export default produtoRoutes;
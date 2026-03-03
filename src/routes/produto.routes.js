const { Router } = require("express");
const { produtoController } = require("../controllers/produtoController");

const produtoRoutes = Router();

produtoRoutes.get("/", produtoController.listarProdutos);
produtoRoutes.get("/:id", produtoController.selecionarProduto);
produtoRoutes.post("/", produtoController.criarProduto);
produtoRoutes.put("/:id", produtoController.editarProduto);
produtoRoutes.delete("/:id", produtoController.excluirProduto);

module.exports = produtoRoutes;
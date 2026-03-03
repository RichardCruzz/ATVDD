const { Router } = require("express");
const { categoriaController } = require("../controllers/categoriaController");

const categoriaRoutes = Router();

categoriaRoutes.get("/", categoriaController.listarCategorias);
categoriaRoutes.get("/:id", categoriaController.selecionarCategoria);
categoriaRoutes.post("/", categoriaController.criarCategoria);
categoriaRoutes.put("/:id", categoriaController.editarCategoria);
categoriaRoutes.delete("/:id", categoriaController.excluirCategoria);

module.exports = categoriaRoutes;
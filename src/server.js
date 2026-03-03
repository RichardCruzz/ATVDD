import express from "express";
import dotenv from "dotenv";
import categoriaRoutes from "./routes/categoria.routes.js";
import produtoRoutes from "./routes/produto.routes.js";

dotenv.config(); 

const app = express();

 
app.use(express.json());

// Rotas
app.use("/categorias", categoriaRoutes);
app.use("/produtos", produtoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
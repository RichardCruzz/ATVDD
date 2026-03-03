import { produtoModel } from "../models/produtoModel.js";
import { categoriaModel } from "../models/categoriaModel.js";

// Cria o controller de produtos
export const produtoController = {

    // Lista todos os produtos
    listarProdutos: async (req, res) => {
        try {
            const produtos = await produtoModels.buscarTodos(); 
            res.status(200).json(produtos); 
        } catch (error) {
            console.error("Erro ao listar produtos:", error);
            res.status(500).json({ message: "Erro ao buscar produtos." });
        }
    },

    // Busca um produto pelo ID
    selecionarProduto: async (req, res) => {
        try {
            const { id } = req.params; 
            const produto = await produtoModels.buscarPorId(id); 

            if (!produto) 
                return res.status(404).json({ message: "Produto não encontrado." });

            res.status(200).json(produto); 
        } catch (error) {
            console.error("Erro ao selecionar produto:", error);
            res.status(500).json({ message: "Erro ao buscar produto." });
        }
    },

    // Cria um novo produto
    criarProduto: async (req, res) => {
        try {
            const { nomeProduto, preco, categoriaId } = req.body; 

            // Verifica se todos os campos obrigatórios foram enviados
            if (!nomeProduto || !preco || !categoriaId) {
                return res.status(400).json({ message: "Nome, preço e categoria são obrigatórios." });
            }

            // Verifica se a categoria existe
            const categoria = await categoriaModels.buscarPorId(categoriaId);
            if (!categoria) 
                return res.status(400).json({ message: "Categoria não encontrada." });

            const id = await produtoModels.inserirProduto(nomeProduto, preco, categoriaId); 

            res.status(201).json({ 
                message: "Produto criado com sucesso!", 
                id, 
                nomeProduto, 
                preco, 
                categoriaId 
            });
        } catch (error) {
            console.error("Erro ao criar produto:", error);
            res.status(500).json({ message: "Erro ao criar produto." });
        }
    },

    // Atualiza um produto existente
    editarProduto: async (req, res) => {
        try {
            const { id } = req.params; 
            const { nomeProduto, preco, categoriaId } = req.body; 

            // Verifica se todos os campos obrigatórios foram enviados
            if (!nomeProduto || !preco || !categoriaId) {
                return res.status(400).json({ message: "Nome, preço e categoria são obrigatórios." });
            }

            // Verifica se a categoria existe
            const categoria = await categoriaModels.buscarPorId(categoriaId);
            if (!categoria) 
                return res.status(400).json({ message: "Categoria não encontrada." });

            const atualizado = await produtoModels.atualizarProduto(id, nomeProduto, preco, categoriaId);

            if (!atualizado) 
                return res.status(404).json({ message: "Produto não encontrado." });

            res.status(200).json({ 
                message: "Produto atualizado com sucesso!", 
                id, 
                nomeProduto, 
                preco, 
                categoriaId 
            });
        } catch (error) {
            console.error("Erro ao editar produto:", error);
            res.status(500).json({ message: "Erro ao atualizar produto." });
        }
    },

    // Exclui um produto pelo ID
    excluirProduto: async (req, res) => {
        try {
            const { id } = req.params;
            const excluido = await produtoModels.excluirProduto(id);

            if (!excluido) 
                return res.status(404).json({ message: "Produto não encontrado." });

            res.status(200).json({ message: "Produto excluído com sucesso!" });
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
            res.status(500).json({ message: "Erro ao excluir produto." });
        }
    }
};

export default produtoController;
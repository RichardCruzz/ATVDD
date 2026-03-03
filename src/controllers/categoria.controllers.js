import { categoriaModels } from "../models/categoria.models.js";

const categoriaControllers = {

    // Lista todas as categorias
    listarCategorias: async (req, res) => {
        try {
            const categorias = await categoriaModels.buscarTodas();
            res.status(200).json(categorias);
        } catch (error) {
            console.error("Erro ao listar categorias:", error);
            res.status(500).json({ message: "Erro ao buscar categorias." });
        }
    },

    // Busca uma categoria específica pelo ID
    selecionarCategoria: async (req, res) => {
        try {
            const { id } = req.params;
            const categoria = await categoriaModels.buscarPorId(id);

            if (!categoria)
                return res.status(404).json({ message: "Categoria não encontrada." });

            res.status(200).json(categoria);
        } catch (error) {
            console.error("Erro ao selecionar categoria:", error);
            res.status(500).json({ message: "Erro ao buscar categoria." });
        }
    },

    // Cria uma nova categoria
    criarCategoria: async (req, res) => {
        try {
            const { nomeCategoria } = req.body;

            if (!nomeCategoria)
                return res.status(400).json({ message: "Nome da categoria é obrigatório." });

            const id = await categoriaModels.inserirCategoria(nomeCategoria);

            res.status(201).json({
                message: "Categoria criada com sucesso!",
                id,
                nomeCategoria
            });
        } catch (error) {
            console.error("Erro ao criar categoria:", error);
            res.status(500).json({ message: "Erro ao criar categoria." });
        }
    },

    // Atualiza uma categoria existente pelo id
    editarCategoria: async (req, res) => {
        try {
            const { id } = req.params;
            const { nomeCategoria } = req.body;

            if (!nomeCategoria)
                return res.status(400).json({ message: "Nome da categoria é obrigatório." });

            const atualizado = await categoriaModels.atualizarCategoria(id, nomeCategoria);

            if (!atualizado)
                return res.status(404).json({ message: "Categoria não encontrada." });

            res.status(200).json({
                message: "Categoria atualizada com sucesso!",
                id,
                nomeCategoria
            });
        } catch (error) {
            console.error("Erro ao editar categoria:", error);
            res.status(500).json({ message: "Erro ao atualizar categoria." });
        }
    },

    // Exclui uma categoria pelo ID
    excluirCategoria: async (req, res) => {
        try {
            const { id } = req.params;
            const excluido = await categoriaModels.excluirCategoria(id);

            if (!excluido)
                return res.status(404).json({ message: "Categoria não encontrada." });

            res.status(200).json({ message: "Categoria excluída com sucesso!" });
        } catch (error) {
            console.error("Erro ao excluir categoria:", error);
            res.status(500).json({ message: "Erro ao excluir categoria." });
        }
    }
};

export default categoriaController;
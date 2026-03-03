const db = require("../config/db");

const produtoModel = {

    // Busca todos os produtos com o nome da categoria
    buscarTodos: async () => {
        const [rows] = await db.query(
            `SELECT p.*, c.nomeCategoria 
             FROM produtos p
             JOIN categorias c ON p.categoriaId = c.id`
        );
        return rows; // Retorna os produtos
    },

    // Busca um produto específico pelo ID
    buscarPorId: async (id) => {
        const [rows] = await db.query(
            `SELECT p.*, c.nomeCategoria 
             FROM produtos p
             JOIN categorias c ON p.categoriaId = c.id
             WHERE p.id = ?`,
            [id] 
        );
        return rows[0]; 
    },

    // Insere um novo produto no banco
    inserirProduto: async (nomeProduto, preco, categoriaId) => {
        const [result] = await db.query(
            `INSERT INTO produtos (nomeProduto, preco, categoriaId) VALUES (?, ?, ?)`,
            [nomeProduto, preco, categoriaId] 
        );
        return result.insertId; 
    },

    // Atualiza um produto existente
    atualizarProduto: async (id, nomeProduto, preco, categoriaId) => {
        const [result] = await db.query(
            `UPDATE produtos 
             SET nomeProduto = ?, preco = ?, categoriaId = ? 
             WHERE id = ?`,
            [nomeProduto, preco, categoriaId, id] 
        );
        return result.affectedRows > 0; 
    },

    // Exclui um produto pelo ID
    excluirProduto: async (id) => {
        const [result] = await db.query(
            "DELETE FROM produtos WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0; 
    }
};

module.exports = { produtoModel };
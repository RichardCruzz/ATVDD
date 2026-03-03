const db = require("../config/db");

const produtoModel = {

    buscarTodos: async () => {
        const [rows] = await db.query(
            `SELECT p.*, c.nomeCategoria 
             FROM produtos p
             JOIN categorias c ON p.categoriaId = c.id`
        );
        return rows;
    },

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

    inserirProduto: async (nomeProduto, preco, categoriaId) => {
        const [result] = await db.query(
            `INSERT INTO produtos (nomeProduto, preco, categoriaId) VALUES (?, ?, ?)`,
            [nomeProduto, preco, categoriaId]
        );
        return result.insertId;
    },

    atualizarProduto: async (id, nomeProduto, preco, categoriaId) => {
        const [result] = await db.query(
            `UPDATE produtos SET nomeProduto = ?, preco = ?, categoriaId = ? WHERE id = ?`,
            [nomeProduto, preco, categoriaId, id]
        );
        return result.affectedRows > 0;
    },

    excluirProduto: async (id) => {
        const [result] = await db.query(
            "DELETE FROM produtos WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0;
    }
};

module.exports = { produtoModel };
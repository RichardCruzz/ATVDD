const db = require("../config/db");

const categoriaModel = {

    buscarTodas: async () => {
        const [rows] = await db.query("SELECT * FROM categorias");
        return rows;
    },

    buscarPorId: async (id) => {
        const [rows] = await db.query(
            "SELECT * FROM categorias WHERE id = ?",
            [id]
        );
        return rows[0];
    },

    inserirCategoria: async (nomeCategoria) => {
        const [result] = await db.query(
            "INSERT INTO categorias (nomeCategoria) VALUES (?)",
            [nomeCategoria]
        );
        return result.insertId;
    },

    atualizarCategoria: async (id, nomeCategoria) => {
        const [result] = await db.query(
            "UPDATE categorias SET nomeCategoria = ? WHERE id = ?",
            [nomeCategoria, id]
        );
        return result.affectedRows > 0;
    },

    excluirCategoria: async (id) => {
        const [result] = await db.query(
            "DELETE FROM categorias WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0;
    }
};

module.exports = { categoriaModel };
import db from "../config/db.js";

const categoriaModels = {

    // Busca todas as categorias no banco
    buscarTodas: async () => {
        const [rows] = await db.query("SELECT * FROM categorias");
        return rows;
    },

    // Busca uma categoria pelo ID
    buscarPorId: async (id) => {
        const [rows] = await db.query(
            "SELECT * FROM categorias WHERE id = ?",
            [id]
        );
        return rows[0];
    },

    // Insere uma nova categoria no banco
    inserirCategoria: async (nomeCategoria) => {
        const [result] = await db.query(
            "INSERT INTO categorias (nomeCategoria) VALUES (?)",
            [nomeCategoria]
        );
        return result.insertId;
    },

    // Atualiza o nome de uma categoria existente
    atualizarCategoria: async (id, nomeCategoria) => {
        const [result] = await db.query(
            "UPDATE categorias SET nomeCategoria = ? WHERE id = ?",
            [nomeCategoria, id]
        );
        return result.affectedRows > 0;
    },

    // Exclui uma categoria
    excluirCategoria: async (id) => {
        const [result] = await db.query(
            "DELETE FROM categorias WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0;
    }
};

export { categoriaModels };
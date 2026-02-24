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
};

module.exports = { produtoModel };
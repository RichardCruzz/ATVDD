const db = require("../config/db"); 

const categoriaModel = {
    buscarTodas: async () => {
        const [rows] = await db.query("SELECT * FROM categorias");
        return rows;
    },

    bUscarPorId: async (id) => {
        const [rows] = await db.query("SELECT * FROM categorias WHERE id = ?", [id]);
        return rows[0];
    },

   
};

module.exports = { categoriaModel };
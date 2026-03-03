import createMulter from "../config/upload.multer.js";

const uploadImage = createMulter({
    categoria: "imagens", 
    tiposPermitidos: ["image/png", "image/jpeg", "image/jpg"],
    tamanhoArquivo: 10 * 1024 * 1024 // 10mb
}).single("image"); 

export default uploadImage;
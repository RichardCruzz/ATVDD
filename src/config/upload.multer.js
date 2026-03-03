const multer = require("multer"); 
const path = require("path"); 
const crypto = require("crypto"); 
const fs = require("fs"); 

const baseUploadDir = path.resolve(process.cwd(), "uploads");

// Verifica se a pasta existe, se não existir é criada
const verificaDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true }); 
    }
};

const createMulter = ({ categoria, tiposPermitidos, tamanhoArquivo }) => {

    const pastaFinal = path.join(baseUploadDir, categoria);
    verificaDir(pastaFinal); 

    //armazenamento
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, pastaFinal); 
        },
        filename: (req, file, cb) => {
            const hash = crypto.randomBytes(12).toString("hex"); 
            cb(null, `${hash}-${file.originalname}`); 
        }
    });

    // filtro para permitir apenas os tipos de arquivos específicos
    const fileFilter = (req, file, cb) => {
        if (!tiposPermitidos.includes(file.mimetype)) {
            return cb(new Error("Tipo de arquivo não permitido")); 
        }
        cb(null, true); 
    };

    return multer({
        storage,
        limits: { fileSize: tamanhoArquivo }, 
        fileFilter 
    });
};

module.exports = createMulter;
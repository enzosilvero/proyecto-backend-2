import dotenv from 'dotenv';
import app from './app.js';

// Configuramos dotenv para leer el archivo .env
dotenv.config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`🚀 SERVIDOR ESCUCHANDO EN EL PUERTO: ${PORT}`);
    console.log(`==================================================`);
});
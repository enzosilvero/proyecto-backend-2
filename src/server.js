import config from './config/config.js'; 
import { connectDB } from './config/db.js'; // <- 2. Traemos la función de conexión
import app from './app.js';

// 3. Ejecutamos la conexión a MongoDB
connectDB();

app.listen(config.port, () => {
    console.log('==================================================');
    console.log(`🚀 SERVIDOR ESCUCHANDO EN EL PUERTO: ${config.port}`);
    console.log('==================================================');
});
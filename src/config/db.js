import mongoose from 'mongoose';
import config from './config.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri);
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};
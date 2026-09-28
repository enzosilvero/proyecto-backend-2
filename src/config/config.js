import dotenv from 'dotenv';
dotenv.config();

export default {
    port: process.env.PORT || 8080,
    mongoUri: process.env.MONGO_URL
};
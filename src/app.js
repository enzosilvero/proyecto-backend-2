import express from 'express';
import eventsRouter from './routes/events.router.js';
import sessionsRouter from './routes/sessions.router.js'; // <- NUEVO

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Servidor activo y funcionando correctamente 🚀'
    });
});

app.use('/api/events', eventsRouter);
app.use('/api/sessions', sessionsRouter); // <- NUEVO

export default app;
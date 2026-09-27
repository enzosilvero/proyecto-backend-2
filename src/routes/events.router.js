// src/routes/events.router.js
import { Router } from 'express';
import { getEvents } from '../controllers/events.controller.js';

const router = Router();

router.get('/', getEvents);

export default router;
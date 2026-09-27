// src/controllers/events.controller.js

export const getEvents = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: []
    });
};
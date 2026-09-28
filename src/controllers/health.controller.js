
export const checkHealth = (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date() });
};
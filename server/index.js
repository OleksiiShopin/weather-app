import express from 'express';
import { get } from 'axios';
import cors from 'cors';
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    try {
        const response = await get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

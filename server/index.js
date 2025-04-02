import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = 5000;
const { get } = axios;

app.use(cors());

app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    try {
        const response = await get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

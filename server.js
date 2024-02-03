const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const axios = require('axios');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.post('/solve-problem', async (req, res) => {
    try {
        const response = await axios.post('https://api.getknit.ai/v1/router/run', req.body, {
            headers: {
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMTAzNjk3MjI3MzIxMjU1Mzc1NTY3In0sImlhdCI6MTcwNjc5OTMzMSwiZXhwIjoxNzA3ODc5MzMxfQ.z-8ZBeNOuRkw62k2y_elW5_LXBzgBiaSsEnivXT3Mgw'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.post('/travel-planner', async (req, res) => {
    try {
        const response = await axios.post('https://api.getknit.ai/v1/router/run', req.body, {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMTAzNjk3MjI3MzIxMjU1Mzc1NTY3In0sImlhdCI6MTcwNjc5OTMzMSwiZXhwIjoxNzA3ODc5MzMxfQ.z-8ZBeNOuRkw62k2y_elW5_LXBzgBiaSsEnivXT3Mgw'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

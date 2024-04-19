const express = require('express');
const axios = require('axios'); // Ensure Axios is installed
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Proxy endpoint
app.get('/api/restaurants', (req, res) => {
    const postcode = req.query.postcode;
    if (!postcode) {
        return res.status(400).send('Postcode is required');
    }

    const apiUrl = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;
    axios.get(apiUrl)
        .then(apiRes => res.json(apiRes.data))
        .catch(error => {
            console.error('API request failed:', error);
            res.status(500).send('Failed to fetch data from external API');
        });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

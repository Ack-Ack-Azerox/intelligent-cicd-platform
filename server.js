const express = require('express');
const app = express();

app.get('/', (req, res) => {
    
    res.send("Version 2 deployed successfully 🚀");
});

app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

const express = require('express');
const cors = require('cors');
const { user_model } = require('./db/user');
require('./db/config');
require('./db/user');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.post("/registration", async (req, res) => {
    const user = user_model(req.body);
    const result = await user.save();
    res.send(result);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
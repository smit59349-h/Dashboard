const express = require('express');
const cors = require('cors');
const { user_model } = require('./db/user');
require('./db/config');
require('./db/user');
const path = require('path');
const app = express();
app.use(express.json());
app.use(cors());


app.post("/registration",async (req,res)=>{
    const user = user_model(req.body);
    const result = await user.save();
    res.send(result);
});
app.listen(8080);
const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("Welcome in Home page");
});

app.get("/about",(req,res)=>{
    res.send("Welcome in About Us page");
});

app.get("/services",(req,res)=>{
    res.send("We are committed to serve you better!");
});

app.listen(5500);
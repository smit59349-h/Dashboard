const express = require('express');
const cors = require('cors');
const user = new User(req.body);
require('./db/config');
require('./db/user');
const path = require('path');
const app = express();
app.use(express.json());
app.use(cors());


app.post('/registration',async (req,res)=>{
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (user) {
    res.send({
      success: true,
      message: "Login Successful",
      user,
    });
  } else {
    res.send({
      success: false,
      message: "Invalid Email or Password",
    });
  }
});

app.listen(8080);
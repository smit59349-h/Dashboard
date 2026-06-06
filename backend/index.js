const express = require("express");
const cors = require("cors");
const User = require("./db/user");
require("./db/config");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

// Registration API
app.post("/registration", async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Login API
app.post("/login", async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server Error",
    });
  }
});

// Get All Users API
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/delete-user/:id", async (req, res) => {
  try {
    const result = await User.deleteOne({
      _id: req.params.id,
    });

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
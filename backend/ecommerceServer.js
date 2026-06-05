const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/mongodbConfig");

dotenv.config();

console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("FashionStore Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
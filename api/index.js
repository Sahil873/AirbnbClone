const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User.js");
const bcrypt = require("bcrypt");
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

const port = 3000;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("CONNECTED TO DB"))
  .catch((err) => console.log(err));

app.get("/test", (req, res) => {
  res.json("request ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(newUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email });
  if (userFound) {
    const userPass = bcrypt.compareSync(password, userFound.password);
    if (userPass) {
      res.json("Password is Correct");
    } else {
      res.status(422).json("Password is Incorrect");
    }
  } else {
    res.json("User Not Found");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

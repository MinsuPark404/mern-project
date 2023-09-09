const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();


const cors = require("cors");
const UserModel = require("./models/Users");

connectDb();
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/getUsers", (req, res) => {
  UserModel.find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

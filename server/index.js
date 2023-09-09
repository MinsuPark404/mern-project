const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:1234@freecluster.svqk0cb.mongodb.net/mern-db?retryWrites=true&w=majority"
)

app.get("/getUsers", (req, res)=>{
  
})

app.listen(3001, () => {
  console.log("Server is Running");
});

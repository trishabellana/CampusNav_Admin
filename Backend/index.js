const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@braveroute.4gjla.mongodb.net/BraveRoute?retryWrites=true&w=majority&appName=BraveRoute"
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(() => {
    console.log("Error connecting to Database!");
  });

app.post("/accounts", (req, res) => {
  res.send("Data Received");
});

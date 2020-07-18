require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}`);
});

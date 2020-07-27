require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require('cors')

const app = express();

// My Routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

// DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

// Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// My Routes
app.use('/api', authRoutes)
app.use('/api', userRoutes)


// port
const port = process.env.PORT || 8000;

// starting a SERVER
app.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}`);
});

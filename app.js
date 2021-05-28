const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv/config");

const doctorsRoute = require("./Routes/doctors");

app.use(bodyParser.json());
app.use(cors());
app.use("/doctors", doctorsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("we are at home");
});

//   connect to  db

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err)=>console.log(err))

// start listening server
app.listen(3000);

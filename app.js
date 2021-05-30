const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv/config");

const doctorsRoute = require("./Routes/doctors");
const patientsRoute = require("./Routes/patients");
const appointmentsRoute = require("./Routes/appointments");

app.use(bodyParser.json());
app.use(cors());


// ROUTES
app.use("/doctors", doctorsRoute);
app.use("/patients", patientsRoute);
app.use("/appointments", appointmentsRoute);
// 


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
app.listen(9000);

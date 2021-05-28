const express = require("express");
const router = express.Router();
const Patients = require("../models/Patients");

router.get("/", (req, res) => {
  res.send('patients api')
});

// Search for a patient using patientID

// remove patient using patientID

module.exports = router;

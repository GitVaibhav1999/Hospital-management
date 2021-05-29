const express = require("express");
const router = express.Router();
const Patients = require("../models/Patients");

router.get("/", (req, res) => {
  res.send("patients api");
});

// Search for a patient using patientID

router.get("/getPatientsData", (req, res) => {
  Patients.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// add patient patient using patientID

router.post("/addPatientData", (req, res) => {
  const patient = new Patients({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    contact: req.body.contact,
    patientID: req.body.patientID,
  });

  patient
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;

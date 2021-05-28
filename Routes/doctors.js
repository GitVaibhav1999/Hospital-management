const express = require("express");
const router = express.Router();
const Doctors = require("../models/Doctors");

// get all doctors data

router.get("/getDoctorsData", (req, res) => {
  Doctors.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// post request to add new doctor

router.post("/addDoctorData", (req, res) => {
  const doctor = new Doctors({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contact: req.body.contact,
    doctorID: req.body.doctorID,
    speciality: req.body.speciality,
    daysAvailable: req.body.daysAvailable,
    maxAppointmentPerDay: req.body.maxAppointmentPerDay,
  });

  doctor
    .save()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json({ message: err });
    });
});

// delete doctor using his id

router.delete("/deleteDoctorById", (req, res) => {
  const doctorID = req.body.doctorID;
  Doctors.deleteOne({ doctorID: doctorID })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json({ message: err });
    });
});

// update doctor availability by his id

router.post("/updateDoctorAvailabilityById", (req, res) => {
  const doctorID = req.body.doctorID;
  const updatedDaysAvailable = req.body.updatedDaysAvailable;

  Doctors.updateOne(
    { doctorID: doctorID },
    { daysAvailable: updatedDaysAvailable }
  )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;

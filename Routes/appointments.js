const express = require("express");
const router = express.Router();
const Appointments = require("../models/Appointments");

router.get("/", (req, res) => {
  res.send("appointments api");
});

// get all appointments

router.get("/getAppointmentsData", (req, res) => {
  Appointments.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// add a new appointment REQUEST

router.post("/addNewAppointment", (req, res) => {
  const appointment = new Appointments({
    appointmentID: req.body.appointmentID,
    patientID: req.body.patientID,
    doctorID: req.body.doctorID, // empty if slot not booked
    day: req.body.day, // empty if slot not booked
    severity: req.body.severity, // 1 - 5
    speciality: req.body.speciality,
    isBooked: req.body.isBooked,  // false is not booked
  });

  appointment
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

// delete a pending appointment by ID.

router.delete("/deleteAppointmentByID", (req, res) => {
  const appointmentID = req.body.appointmentID;
  Appointments.deleteOne({ appointmentID: appointmentID })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("delete appointment error", err.data);
      res.json({ message: err.data });
    });
});

// booking slot for an appointment using appointmentID (updating doctorID and day )

router.post("/bookSlotByID", (req, res) => {
  const doctorID = req.body.doctorID;
  const day = req.body.day;
  const appointmentID = req.body.appointmentID;

  Appointments.updateOne(
    { appointmentID: appointmentID },
    { isBooked: true, doctorID: doctorID, day: day }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("book slot error", err.data);
      res.json({ message: err.data });
    });
});

module.exports = router;

const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    appointmentID: String,
    patientID: String,
    doctorID: String,
    day: String,
    severity: String,
    speciality: String,
    isBooked: Boolean,
})

module.exports = mongoose.model('AppointmentsData', appointmentSchema) 
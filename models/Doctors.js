const mongoose = require('mongoose');

const doctorsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    contact: String,
    doctorID: String,
    speciality: String,
    daysAvailable: Array,
    maxAppointmentPerDay: String,
})

module.exports = mongoose.model('DoctorsData', doctorsSchema) 
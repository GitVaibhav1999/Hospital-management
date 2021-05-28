const mongoose = require('mongoose');

const patientsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,
    contact: String,
    patientID: String,

})

module.exports = mongoose.model('patientsData', patientsSchema) 
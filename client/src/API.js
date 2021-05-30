import axios from "axios";

const backend = "http://localhost:9000";

//  API for doctors collection

export const getDoctorsData = async () => {
  const docData = await axios.get(`${backend}/doctors/getDoctorsData`);
  return docData.data;
};

export const addDoctorData = async (doctorData) => {
  var res = await axios.post(`${backend}/doctors/addDoctorData`, doctorData);
  return res;
};

export const deleteDoctorData = async (id) => {
  var res = await axios.delete(`${backend}/doctors/deleteDoctorByID`, {
    data: { doctorID: id },
  });
  var data = await getDoctorsData();
  console.log(res.data);
  return data;
};

//  API for patient collection

export const getPatientsData = async () => {
  const patData = await axios.get(`${backend}/patients/getPatientsData`);
  return patData.data;
};

export const addPatientData = async (patientData) => {
  var res = await axios.post(`${backend}/patients/addPatientData`, patientData);
  return res;
};

// APIs for appointments database

export const addNewAppointment = async (appDetail) => {
  const res = await axios.post(`${backend}/appointments/addNewAppointment`, {
    appointmentID:
      appDetail.severity + appDetail.patientID + appDetail.speciality,
    patientID: appDetail.patientID,
    speciality: appDetail.speciality,
    doctorID: appDetail.doctorID,
    day: appDetail.day,
    isBooked: appDetail.isBooked,
  });
  return res;
};

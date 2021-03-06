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
    severity: appDetail.severity,
  });
  return res;
};

export const getAllAppointments = async () => {
  const res = await axios.get(`${backend}/appointments/getAppointmentsData`);
  return res.data;
};

export const deleteAppointment = async (appID) => {
  const res = await axios.delete(
    `${backend}/appointments/deleteAppointmentByID`,
    { data: { appointmentID: appID } }
  );
  return res;
};

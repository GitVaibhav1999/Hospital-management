import axios from "axios";

const backend = "http://localhost:9000";

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

export const getPatientsData = async () => {
    const patData = await axios.get(`${backend}/patients/getPatientsData`);
    return patData.data;
}

export const addPatientData = async (patientData) => {
    var res = await axios.post(`${backend}/patients/addPatientData`, patientData);
    return res;
}
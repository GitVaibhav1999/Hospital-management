import React, { useState } from "react";

const DataContext = React.createContext();

export function useData() {
  return React.useContext(DataContext);
}

export function DataProvider({ children }) {
  const [doctorsData, setDoctorsData] = useState([]);
  const [patientsData, setPatientsData] = useState([]);

  const [showSlots, setShowSlots] = useState(false);
  const [AppDetail, setAppDetail] = useState({});
  const [pendingAppointments, setPendingAppointments] = React.useState([]);
  const [bookedAppointments, setBookedAPpointments] = React.useState([]);

  const value = {
    value_doctors_data: [doctorsData, setDoctorsData],
    value_patients_data: [patientsData, setPatientsData],
    value_show_slots: [showSlots, setShowSlots],
    value_app_detail: [AppDetail, setAppDetail],
    value_pending_appointments: [pendingAppointments, setPendingAppointments],
    value_booked_appointments: [bookedAppointments, setBookedAPpointments]
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

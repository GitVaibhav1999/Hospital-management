import React, { useState } from "react";

const DataContext = React.createContext();

export function useData() {
  return React.useContext(DataContext);
}

export function DataProvider({ children }) {
  const [doctorsData, setDoctorsData] = useState([]);
  const [patientsData, setPatientsData] = useState([]);

  const value = {
    value_doctors_data: [doctorsData, setDoctorsData],
    value_patients_data: [patientsData, setPatientsData],
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

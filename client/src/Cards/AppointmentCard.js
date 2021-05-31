import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
    color: "#6b6b6b",
    flexDirection: "column",
    backgroundColor: "#f2eecb",
    padding: "1rem 1rem",
    margin: "0.5rem 1rem 2rem",
    width: "16vw",
    textAlign: "left",
    justifyContent: "left",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
  },
});

export default function AppointmentCard({thisAppointment}) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div style={{ color: "grey", fontSize: "0.8rem", marginBottom: "1rem" }}>
        {thisAppointment.appointmentID}
      </div>
      <div style={{ margin: "0.3rem" }}>
        <span>PatientID:</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{thisAppointment.patientID}</span>
      </div>
      <div style={{ margin: "0.3rem" }}>
        <span style={{ color: "#6b6b6b" }}>Speciality:</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{thisAppointment.speciality}</span>
      </div>
      <div style={{ margin: "0.3rem" }}>
        <span style={{ color: "#6b6b6b" }}>Severity:</span>{" "}
        <span style={{color:'red'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{thisAppointment.severity}</span>
      </div>
    </div>
  );
}

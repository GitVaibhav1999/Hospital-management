import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
    color: "#6b6b6b",
    flexDirection: "column",
    backgroundColor: "#f2eecb",
    padding: "1rem 1rem",
    marginBottom: "0.5rem",
    width: "16vw",
    textAlign: "left",
    justifyContent: "left",
    border:"1px solid grey",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
  },
});

export default function AppointmentCard({ thisAppointment }) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div style={{ color: "grey", fontSize: "0.8rem", marginBottom: "1rem" }}>
        {thisAppointment.appointmentID}
      </div>
      <div style={{ margin: "0.3rem" }}>
        <span>PatientID:</span>
        <span style={{color:''}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{thisAppointment.patientID}</span>
      </div>
      <div style={{ margin: "0.3rem" }}>
        <span style={{ color: "#6b6b6b" }}>Speciality:</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{thisAppointment.speciality}</span>
      </div>
      <div style={{ margin: "0.3rem" }}>
        <span style={{ color: "#6b6b6b" }}>Severity:</span>{" "}
        <span style={{ color: "red" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{thisAppointment.severity}
        </span>
      </div>
      <div>
        {thisAppointment.doctorID.length != 0 ? (
          <div style={{ margin: "0.3rem" }}>
            <span style={{ color: "#6b6b6b" }}>DoctorID:</span>{" "}
            <span style={{ color: "#023047" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{thisAppointment.doctorID}
            </span>
          </div>
        ) : null}
      </div>
      <div>
        {thisAppointment.day.length != 0 ? (
          <div style={{ margin: "0.3rem" }}>
            <span style={{ color: "#6b6b6b" }}>Day:</span>{" "}
            <span style={{ color: "#023047" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{thisAppointment.day}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

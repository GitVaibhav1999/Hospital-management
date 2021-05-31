import React from "react";
import { Button, IconButton, makeStyles } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import { deleteAppointment, getAllAppointments } from "../API";
import { useData } from "../Context";

const useStyles = makeStyles({
  card: {
    display: "flex",

    color: "#6b6b6b",
    flexDirection: "column",
    backgroundColor: "#f2eecb",
    padding: "1rem 1rem",
    margin: "0.5rem",
    width: "15vw",
    textAlign: "left",
    justifyContent: "left",
    border: "1px solid grey",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
  },
  button1: {
    width: "100%",
    marginTop: "1rem",
  },
});

export default function AppointmentCard({ thisAppointment }) {
  const classes = useStyles();

  const { value_booked_appointments, value_pending_appointments } = useData();
  const [pendingAppointments, setPendingAppointments] =
    value_pending_appointments;
  const [bookedAppointments, setBookedAPpointments] = value_booked_appointments;

  const deleteApp = async () => {
    const res = deleteAppointment(thisAppointment.appointmentID).then(() => {
      const getAppointments = async () => {
        const tempPending = [];
        const tempBooked = [];
        const resApp = await getAllAppointments();

        resApp.forEach((eachAppointment) => {
          if (eachAppointment.isBooked == false)
            tempPending.push({ ...eachAppointment });
          else tempBooked.push({ ...eachAppointment });
        });

        setPendingAppointments(tempPending);
        setBookedAPpointments(tempBooked);
      };
      getAppointments();
    });
  };

  return (
    <div className={classes.card}>
      <div
        style={{
          color: "grey",
          fontSize: "0.8rem",
          marginBottom: "1rem",
          display: "flex",
        }}
      >
        <span style={{ flexGrow: 1 }}>{thisAppointment.appointmentID}</span>
      </div>
      <div style={{ margin: "0.3rem" }}>
        <span>PatientID:</span>
        <span style={{ color: "" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{thisAppointment.patientID}
        </span>
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
        <span>
          <Button
            onClick={deleteApp}
            className={classes.button1}
            variant="outlined"
          >
            DELETE APPOINTMENT
          </Button>
        </span>
      </div>
    </div>
  );
}

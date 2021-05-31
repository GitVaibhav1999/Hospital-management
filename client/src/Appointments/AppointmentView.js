import React from "react";
import { makeStyles } from "@material-ui/core";

import AppointmentCard from "../Cards/AppointmentCard";
import { getAllAppointments } from "../API";
import {useData} from '../Context'

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width:"20vw",
    // marginTop:'1rem',
    // marginB/ottom:'1rem',
    background: "whiteSmoke",
    // marginRight:'0.5rem',
    boxShadow:
      "0 2px 20px 10px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",

    //
  },
  middle: {
    overflowY: "auto",
    flexGrow:'1'
    // border:"1px solid grey"
  },
  top: {
    color: "grey",
    fontSize: "1.6rem",
    width: "100%",
    margin: "1rem",
  },
});

function AppointmentView() {
  const classes = useStyles();

  const {value_booked_appointments,value_pending_appointments} = useData();
  const [pendingAppointments, setPendingAppointments] = value_pending_appointments;
  const [bookedAppointments, setBookedAPpointments] = value_booked_appointments;

  React.useEffect(() => {
    const getAppointments = async () => {
      const tempPending = [];
      const tempBooked = [];
      const resApp = await getAllAppointments();

      resApp.forEach((eachAppointment) => {
        if (eachAppointment.isBooked == false)
          tempPending.push({ ...eachAppointment });
        else tempBooked.push({ ...eachAppointment });
      });
      // console.log("All pending ", tempPending);
      // console.log("All booked", tempBooked);
      setPendingAppointments(tempPending)
      setBookedAPpointments(tempBooked)
    };
    getAppointments();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.top}>Pending Appointments - </div>
      <div className={classes.middle}>
        {pendingAppointments.map((eachPending) => {
          return <AppointmentCard thisAppointment = {eachPending} />;
        })}
      </div>
    </div>
  );
}

export default AppointmentView;

import React from "react";
import { makeStyles, Switch } from "@material-ui/core";

import AppointmentCard from "../Cards/AppointmentCard";
import { getAllAppointments } from "../API";
import { useData } from "../Context";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "19vw",
    borderLeft: "1px solid black",
    // marginTop:'1rem',
    // marginB/ottom:'1rem',
    background: "whiteSmoke",
    overflow: "hidden",
    boxShadow:
      "0 2px 20px 10px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
  },
  middle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "auto",
    flexGrow: "1",
    width: "100%",
    height: "100%",
  },
  top: {
    color: "grey",
    fontSize: "1.6rem",
    width: "100%",
    marginBottom: "0.5rem",
    margin: "1rem",
  },
  switch: {
    color: "grey",
    padding: "0.3rem",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
    width: "20vw",
    color: "black",
    width: "19vw",
    flexGrow: "1",
    marginBottom: "1rem",
  },
});

function AppointmentView() {
  const classes = useStyles();

  const { value_booked_appointments, value_pending_appointments } = useData();
  const [pendingAppointments, setPendingAppointments] =
    value_pending_appointments;
  const [bookedAppointments, setBookedAPpointments] = value_booked_appointments;

  const [showPending, setShowPending] = React.useState(false);

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

      setPendingAppointments(tempPending);
      setBookedAPpointments(tempBooked);
    };
    getAppointments();
  }, []);

  const handleSwitch = () => {
    setShowPending(!showPending);
  };

  return (
    <div className={classes.root}>
      <div className={classes.switch}>
        <span>BOOKED</span>
        <Switch
          checked={showPending}
          onChange={handleSwitch}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <span>PENDING</span>
      </div>

      <div className={classes.middle}>
        {showPending == false
          ? bookedAppointments.map((eachPending) => {
              return <AppointmentCard thisAppointment={eachPending} />;
            })
          : pendingAppointments.map((eachPending) => {
              return <AppointmentCard thisAppointment={eachPending} />;
            })}
      </div>
    </div>
  );
}

export default AppointmentView;

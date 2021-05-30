import React from "react";
import { makeStyles } from "@material-ui/core";
import AppointmentCard from "../Cards/AppointmentCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // marginTop:'1rem',
    // marginB/ottom:'1rem',
    background: "whiteSmoke",
    // marginRight:'0.5rem',
    boxShadow: "0 2px 20px 10px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",

    //
  },
  middle: {
    overflowY: "auto",
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

  return (
    <div className={classes.root}>
      <div className={classes.top}>Pending Appointments - </div>
      <div className={classes.middle}>
        {[1, 2, 4, 5, 4, 4].map(() => {
          return <AppointmentCard />;
        })}
      </div>
    </div>
  );
}

export default AppointmentView;

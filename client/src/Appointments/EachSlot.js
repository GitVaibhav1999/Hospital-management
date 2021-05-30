import { Button, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "left",
    width: "90%",
    // border: "1px solid grey",
    margin: "2rem 0.5rem",
    padding: "2rem 1rem",
    borderRadius: "10px",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
    backgroundColor: "#fcf4f2",
  },


  left: {
    display: "flex",
    flexGrow: "1",
    flexDirection: "column",
    width: "100%",
  },
  button: {
    width: "10vw",
    //   height:'5vh',
    padding: "1rem 2rem",
    "&:hover": {
      backgroundColor: "#edb1a2",
      outline: "1px solid #8a795d",
      //   boxShadow: "3px 3px 1px 0.1px #8a795d",
    },
  },
});

function EachSlot({slotData}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <div className={classes.left}>
        <div style={{ width: "30%", textAlign: "left" }}>
          <Typography style={{ color: "grey", fontSize: "1.3rem" }}>
            <span style={{ color: "#e07a5f", fontSize: "1rem" }}>
              Doctor Name:
            </span>{" "}
            {slotData.doctorName}
          </Typography>
        </div>
        <div style={{ width: "30%", textAlign: "left" }}>
          <Typography style={{ color: "grey", fontSize: "1.3rem" }}>
            <span style={{ color: "#e07a5f", fontSize: "1rem" }}>
              Appointment Day:
            </span>{" "}
            {slotData.day}
          </Typography>
        </div>
      </div>
      <div>
        <Button className={classes.button} variant="outlined">
          Book Slot
        </Button>
      </div>
    </div>
  );
}

export default EachSlot;

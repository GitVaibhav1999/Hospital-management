import { IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Paper } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
    width: "15vw",
    height: "10vh",
    fontSize: "0.5em",
    padding: "1.4rem 1.5rem",
    textAlign: "left",
    border: "1px solid #023047",
    borderRadius: "2rem",
    boxShadow: "1px 1px 2px 0.4px #023047",
  },
  detail: {
    color: "#023047",
    flexGrow: "1",
  },
  delete: {
    "$:hover": {
      color: "red",
      marginLeft: "2rem",
    },
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    direction: "row",
    alignItems: "center",
  },
}));

function DoctorCard({ thisDoctor }) {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <div className={classes.detail}>
        <div className={classes.top}>
          <span style={{ flexGrow: "1" }}>
            <Typography variant="h4">{thisDoctor.firstName}</Typography>
          </span>
          <span className={classes.delete}>
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </span>
        </div>

        <Typography variant="subtitle1">{thisDoctor.speciality}</Typography>
        {/* <Typography variant="subtitle1">{thisDoctor.contact}</Typography> */}
        
      </div>
      <div>
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => {
          var available = thisDoctor.daysAvailable.includes(day);

          return (
            <span
              style={{
                margin: "0.2rem",
                color: available == false ? "#D3D3D3" : "#023047",
                borderBottom: available == false ? null : "1px solid #023047",
                padding: "0.2rem 0.3rem",
              }}
            >
              {day}
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default DoctorCard;

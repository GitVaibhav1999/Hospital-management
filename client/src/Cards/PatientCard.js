import { IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Paper } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddAppointment from "../Appointments/AddAppointment";
const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
    width: "15vw",
    height: "12vh",
    fontSize: "0.5em",
    padding: "1.4rem 1.5rem",
    textAlign: "left",
    border: "1px solid #e07a5f",
    borderRadius: "2rem",
    boxShadow: "1px 1px 2px 0.4px #e07a5f",
    position:'relative',
    zIndex:'0'
  },
  detail: {
    color: "#e07a5f",
    flexGrow: "1",
  },
  delete: {
    display: "flex",
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
  png: {
    fill: "red",
  },
  button:{
    border: "1px solid grey",
    borderRadius: "20px",
    padding: "2% 4%",
    backgroundColor:'whiteSmoke',
    '&:hover':{
      border: "1px solid red",
      borderRadius: "20px",
      padding: "2% 4%",
      backgroundColor:'	#FFC0CB',
    }
  }
}));

function PatientCard({ thisPatient }) {
  const classes = useStyles();

  const [appointment, setAppointment] = React.useState(false);

  if (appointment == true) {
    return (
      <AddAppointment thisPatient={thisPatient} close={()=>setAppointment(false)} />
    );
  }

  return (
    <div className={classes.paper}>
      <div className={classes.detail}>
        <div className={classes.top}>
          <span style={{ flexGrow: "1" }}>
            <Typography variant="h4">{thisPatient.firstName}</Typography>
            <Typography>Age: {thisPatient.age}</Typography>
          </span>
        </div>

        <Typography variant="subtitle1">ID: {thisPatient.patientID}</Typography>
      </div>
      <span className={classes.delete}>
        <div style={{ flexGrow: "1", justifyContent: "center" }}></div>
        <IconButton
          onClick={() => setAppointment(true)}
          className={classes.button}
        >
          <AddCircleOutlineIcon/>
          <Typography style={{ marginLeft: "1rem" }} variant="button">
            Appointment
          </Typography>
        </IconButton>
      </span>
    </div>
  );
}
export default PatientCard;

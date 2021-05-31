import { Typography, makeStyles, Button, Grid } from "@material-ui/core";
import React from "react";
import AddPatient from "../AddForm/AddPatient";
import ShowSlots from "../Appointments/ShowSlots";
import PatientCard from "../Cards/PatientCard";
import { useData } from "../Context";
import SearchPatients from "../Search/SearchPatient";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    margin: "0",
  },
  list: {
    overflow: "auto",
    width: "100%",
    marginBottom: "1rem",
    border: "1px solid 8a795d",
    height: "100%",
    boxShadow: "inset -8px 0 20px grey",

    // backgroundColor:'red  '
  },
  add: {
    padding: "1rem",
    border: "1px solid #e07a5f",
    padding: "1rem 2rem",
    color: "#e07a5f",
    boxShadow: "3px 3px 1px 0.2px grey",
    "&:hover": {
      backgroundColor: "#e07a5f",
      color: "whiteSmoke",
      boxShadow: "0px 0px 0px",
    },
  },
}));

function PatientsTab() {
  const classes = useStyles();

  const { value_patients_data, value_show_slots } = useData();
  const [patientsData, setPatientsData] = value_patients_data;
  const [showSlots, setShowSlots] = value_show_slots;

  const [add, setAdd] = React.useState(false);

  if (showSlots == true) {
    return <ShowSlots />;
  }

  if (add == true) {
    return <AddPatient setFalse={() => setAdd(false)} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <SearchPatients />
      </div>
      <div className={classes.list}>
        <Grid container>
          {patientsData.map((thisPatient) => (
            <Grid item>
              <PatientCard thisPatient={thisPatient} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div style={{ flexGrow: "1" }}></div>
      <Button
        onClick={() => setAdd(true)}
        className={classes.add}
        variant="outlined"
        color="#e07a5f"
        className={classes.add}
      >
        {" "}
        Add patient{" "}
      </Button>
    </div>
  );
}

export default PatientsTab;

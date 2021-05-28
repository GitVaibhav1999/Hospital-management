import { Typography, makeStyles, Button, Grid } from "@material-ui/core";
import React from "react";
import DoctorCard from "../Cards/DoctorCard";
import PatientCard from "../Cards/PatientCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    margin: "0",
  },
  list: {
    overflow: "auto",
    // backgroundColor:'red  '
  },
  add: {
    padding: "1rem",
  },
}));

function PatientsTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.search}> Search patients</div>
      <Grid className={classes.list} container>
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <Grid item>
            <PatientCard />
          </Grid>
        ))}
      </Grid>
          <div style={{flexGrow:'1'}}></div>
      <Button style={{color:'#e07a5f', borderColor:'#e07a5f'}} variant="outlined" color="#e07a5f" className={classes.add}>
        {" "}
        Add patient{" "}
      </Button>

      {/* add doctor button */}
      {/* add doctor form */}
    </div>
  );
}

export default PatientsTab;

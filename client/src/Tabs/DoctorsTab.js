import { Typography, makeStyles, Button, Grid } from "@material-ui/core";
import React from "react";
import DoctorCard from "../Cards/DoctorCard";

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

function DoctorsTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.search}> Search doctors</div>
      <Grid className={classes.list} container>
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <Grid item>
            <DoctorCard />
          </Grid>
        ))}
      </Grid>
          <div style={{flexGrow:'1'}}></div>
      <Button style={{color:'#023047'}} variant="outlined" color="#023047" className={classes.add}>
        {" "}
        Add Doctor{" "}
      </Button>

      {/* add doctor button */}
      {/* add doctor form */}
    </div>
  );
}

export default DoctorsTab;

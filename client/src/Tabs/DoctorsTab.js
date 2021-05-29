import { Typography, makeStyles, Button, Grid } from "@material-ui/core";
import React from "react";
import AddDoctor from "../AddForm/AddDoctor";
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

  const [add, setAdd] = React.useState(false);
  React.useEffect(() => console.log(add), [add]);

  const setAddFalse = () => setAdd(false);

  if (add == true) {
    return <AddDoctor setFalse={() => setAdd(false)} />;
  }

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
      <div style={{ flexGrow: "1" }}></div>
      <Button
        onClick={() => setAdd(true)}
        style={{ color: "#023047" }}
        variant="outlined"
        color="#023047"
        className={classes.add}
      >
        {" "}
        Add Doctor{" "}
      </Button>
    </div>
  );
}

export default DoctorsTab;

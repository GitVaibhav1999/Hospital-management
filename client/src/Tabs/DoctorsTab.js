import { Typography, makeStyles, Button, Grid } from "@material-ui/core";
import React from "react";
import AddDoctor from "../AddForm/AddDoctor";
import DoctorCard from "../Cards/DoctorCard";
import { useData } from "../Context";
import SearchDoctor from "../Search/SearchDoctor";

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
    boxShadow: "inset -1px 0 20px grey  ",
    
    // backgroundColor:'red  '
  },
  add: {
    padding: "1rem",
    boxShadow: "3px 3px 1px 0.2px grey",
    "&:hover": {
      backgroundColor: "#023047",
      color: "whiteSmoke",
      boxShadow: "0px 0px 0px",
    },
  },
}));

function DoctorsTab() {
  const classes = useStyles();

  const { value_doctors_data } = useData();
  const [doctorsData, setDoctorsData] = value_doctors_data;

  const [add, setAdd] = React.useState(false);
  React.useEffect(() => console.log(add), [add]);

  const setAddFalse = () => setAdd(false);

  if (add == true) {
    return <AddDoctor setFalse={() => setAdd(false)} />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        {" "}
        <SearchDoctor />
      </div>
      <div className={classes.list}>
        <Grid
          
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {doctorsData.map((each_doctor) => (
            <Grid item>
              <DoctorCard thisDoctor={each_doctor} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div style={{ flexGrow: "1" }}></div>
      <Button
        onClick={() => setAdd(true)}
        variant="outlined"
        color="#023047"
        className={classes.add}
      >
        {" "}
        Add New Doctor{" "}
      </Button>
    </div>
  );
}

export default DoctorsTab;

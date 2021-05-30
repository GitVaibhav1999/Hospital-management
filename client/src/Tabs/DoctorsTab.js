import { Typography, makeStyles, Button, Grid } from "@material-ui/core";
import { DocumentProvider } from "mongoose";
import React from "react";
import AddDoctor from "../AddForm/AddDoctor";
import { getDoctorsData } from "../API";
import DoctorCard from "../Cards/DoctorCard";
import { useData } from "../Context";

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
    boxShadow: "3px 3px 1px 0.2px grey",
  },
}));

function DoctorsTab() {
  const classes = useStyles();

  const { value_doctors_data } = useData();
  const [doctorsData, setDoctorsData] = value_doctors_data;

  React.useEffect(()=>console.log(doctorsData),[doctorsData])

  React.useEffect(() => {
    const getData = async () => {
      const tempDoctorsData = await getDoctorsData();
      setDoctorsData(tempDoctorsData)
    };
    getData();
  }, []);

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
        {doctorsData.map((each_doctor) => (
          <Grid item>
            <DoctorCard thisDoctor={each_doctor} />
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
        Add New Doctor{" "}
      </Button>
    </div>
  );
}

export default DoctorsTab;

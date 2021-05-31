import {
  IconButton,
  Typography,
  makeStyles,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Input,
  Chip,
  Button,
} from "@material-ui/core";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { addDoctorData, addPatientData, getDoctorsData } from "../API";
import { useData } from "../Context";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  back: {
    border: "1px solid #023047",
    margin: "1rem",
  },
  right: {
    marginLeft: "2rem",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  formLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },

  Text: {
    margin: "1rem",
    width: "20vw",
  },
  formControl: {
    width: "20vw",
    margin: "2rem",
    height: "8vh",
  },
  submit: {
    margin: "2rem",
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
});

function AddPatient(props) {
  const classes = useStyles();

  const { value_patients_data } = useData();
  const [patientsData, setPatientsData] = value_patients_data;

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [id, setId] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleFirstName = (eve) => {
    setFirstName(eve.target.value);
  };

  const handleLastName = (eve) => {
    setLastName(eve.target.value);
  };
  const handleContact = (eve) => {
    setContact(eve.target.value);
  };

  const handleId = (eve) => {
    setId(eve.target.value);
  };

  const handleAge = (eve) => {
    setAge(eve.target.value);
  };

  const temp = () => {
    props.setFalse();
  };

  const submitForm = () => {
    const patientData = {
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      age: age,
      patientID: id,
    };
    addPatientData(patientData).then((res) => {
      var tempData = [...patientsData];
      tempData.push(patientData);
      setPatientsData(tempData);
      temp();
    });
  };

  return (
    <div className={classes.root}>
      <div>
        <IconButton onClick={temp} className={classes.back}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className={classes.right}>
        <div style={{ color: "grey", marginTop: "2rem", marginBottom: "4rem" }}>
          <Typography variant="h4">
            Fill all the details below to add new patient.
          </Typography>
        </div>
        <div className={classes.form}>
          <div className={classes.formLeft}>
            <TextField
              className={classes.Text}
              value={firstName}
              onChange={handleFirstName}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              className={classes.Text}
              value={lastName}
              onChange={handleLastName}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
            <TextField
              className={classes.Text}
              value={contact}
              onChange={handleContact}
              id="outlined-basic"
              label="Contact Number"
              variant="outlined"
            />
            <TextField
              className={classes.Text}
              value={id}
              onChange={handleId}
              id="outlined-basic"
              label="Hospital ID"
              variant="outlined"
            />
            <TextField
              className={classes.Text}
              value={age}
              onChange={handleAge}
              id="outlined-basic"
              label="Age"
              variant="outlined"
            />
          </div>
        </div>
        <div>
          <Button className={classes.submit} onClick={submitForm}>
            {" "}
            <Typography variant="button">Submit Patient Form</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddPatient;

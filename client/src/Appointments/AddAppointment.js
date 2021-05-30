import React from "react";
import {
  Typography,
  makeStyles,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useData } from "../Context";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
    width: "15vw",
    height: "25vh",
    fontSize: "0.5em",
    padding: "1.4rem 1.5rem",
    textAlign: "left",
    border: "1px solid #e07a5f",
    borderRadius: "2rem",
    boxShadow: "1px 1px 2px 0.4px #e07a5f",
    // position: "relative",
    // top: "50%",
    // left: "50%",
    transform: "translate(-2%, -0%)",
    zIndex: "100",
    backgroundColor: "#edb1a2",
    transition: "3s ease",
    boxShadow: "3px 3px 6px 1px #8a795d",
    top: "300px",
    left: "10%",
  },
  detail: {
    color: "#e07a5f",
    flexGrow: "1",
  },

  formControl: {
    width: "100%",
    marginBottom: "1rem",
    height: "70%",
  },

  top: {
    display: "flex",
    flexWrap: "wrap",
    direction: "row",
    alignItems: "center",
  },
}));

function AddAppointment({ thisPatient, close }) {
  const classes = useStyles();

  const { value_show_slots, value_app_detail } = useData();
  const [showSlots, setShowSlots] = value_show_slots;
  const [AppDetail, setAppDetail] = value_app_detail;

  const [severity, setSeverity] = React.useState("");
  const [speciality, setSpeciality] = React.useState("");

  const temp = () => {
    close();
  };

  const showAvailableSlots = () => {
    setAppDetail({
      patientID: thisPatient.patientID,
      severity: severity,
      speciality: speciality,
    });
    setShowSlots(true);
  };

  const handleSeverity = (eve) => {
    setSeverity(eve.target.value);
  };
  const handleSpeciality = (eve) => {
    setSpeciality(eve.target.value);
  };

  return (
    <div className={classes.paper}>
      <div className={classes.detail}>
        <div className={classes.top}>
          <span style={{ flexGrow: "1", fontSize: "1rem" }}>
            <Typography style={{ color: "black" }} variant="subtitle">
              {thisPatient.firstName}
            </Typography>
          </span>
          <span>
            {" "}
            <IconButton onClick={temp}>
              <CloseIcon />
            </IconButton>{" "}
          </span>
        </div>
        <div style={{ padding: "0.3rem 0.6rem", borderRadius: "10px" }}>
          <FormControl className={classes.formControl}>
            <InputLabel style={{ paddingLeft: "0.5rem" }}>Specialty</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={speciality}
              onChange={handleSpeciality}
              label="Age"
              variant="outlined"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Pediatrics"}>Pediatrics</MenuItem>
              <MenuItem value={"Cardiology"}>Cardiology</MenuItem>
              <MenuItem value={"Ophthalmology"}>Ophthalmology</MenuItem>
              <MenuItem value={"Gynaecology"}>Gynaecology</MenuItem>
              <MenuItem value={"Physical Theraphy"}>Physical Theraphy</MenuItem>
              <MenuItem value={"General Therapy"}>General Therapy</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel style={{ paddingLeft: "0.5rem" }}>
              Severity (1 - 5)
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={severity}
              onChange={handleSeverity}
              label="Severity"
              variant="outlined"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Pediatrics"}>1</MenuItem>
              <MenuItem value={"Cardiology"}>2</MenuItem>
              <MenuItem value={"Ophthalmology"}>3</MenuItem>
              <MenuItem value={"Gynaecology"}>4</MenuItem>
              <MenuItem value={"Physical Theraphy"}>5</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            onClick={showAvailableSlots}
            style={{
              border: "1px solid grey",
              boxShadow: "3px 3px 1px 0.1px #8a795d",
              width: "70%",
            }}
          >
            {" "}
            Show Slots{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddAppointment;

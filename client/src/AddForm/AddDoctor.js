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
import {addDoctorData, getDoctorsData} from '../API';
import { useData } from "../Context";


const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  back: {
    border: "1px solid #023047",
    margin: "1rem",
    color:'#023047',
    '&:hover': {
      backgroundColor:'#023047',
      color:'whiteSmoke',
      border:"1px solid black"
    }
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
  button:{
    border: "1px solid #023047",
    padding: "1rem 2rem",
    color: "#023047",
    boxShadow: "3px 3px 1px 0.2px grey",
    '&:hover':{
      backgroundColor:'#023047',
      boxShadow:'0 0 0',
      color:'whiteSmoke'
    }
  }
});

function AddDoctor(props) {
  const classes = useStyles();

  const { value_doctors_data } = useData();
  const [doctorsData, setDoctorsData] = value_doctors_data;

  const totalDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [id, setId] = React.useState("");

  const [speciality, setSpeciality] = React.useState("");
  const [day, setDay] = React.useState([]);
  const [maxAppointment, setMaxAppointment] = React.useState([]);

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

  const handleSpeciality = (eve) => {
    setSpeciality(eve.target.value);
  };
  const handleDays = (eve) => {
    setDay(eve.target.value);
  };
  const handleMaxAppointment = (eve) => {
    setMaxAppointment(eve.target.value);
  };

  const temp = () => {
    props.setFalse();
  };

  const submitForm = () => {
      const doctorData = {
          'firstName': firstName,
          'lastName': lastName,
          'contact': contact,
          'doctorID': id,
          'speciality': speciality,
          'daysAvailable': day,
          'maxAppointmentPerDay':maxAppointment,
      }
      addDoctorData(doctorData).then(res=>{
          var tempData = [...doctorsData]
          tempData.push(doctorData)
          setDoctorsData(tempData)
          temp()
      })
  };

  return (
    <div className={classes.root}>
      <div>
        <IconButton onClick={temp} className={classes.back}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className={classes.right}>
        <div style={{color:'grey',marginTop:'2rem' , marginBottom:'4rem'}}>
          <Typography variant='h4' >Fill all details below to add new doctor.</Typography>
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
              label="ID"
              variant="outlined"
            />
          </div>
          <div className={classes.formRight}>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel>Specialty</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={speciality}
                  onChange={handleSpeciality}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Pediatrics"}>Pediatrics</MenuItem>
                  <MenuItem value={"Cardiology"}>Cardiology</MenuItem>
                  <MenuItem value={"Ophthalmology"}>Ophthalmology</MenuItem>
                  <MenuItem value={"Gynaecology"}>Gynaecology</MenuItem>
                  <MenuItem value={"Physical Theraphy"}>
                    Physical Theraphy
                  </MenuItem>
                  <MenuItem value={"General Therapy"}>General Therapy</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel>Days Available</InputLabel>
                <Select
                  MenuProps={{
                    getContentAnchorEl: () => null,
                  }}
                  labelId="demo-mutiple-chip-label"
                  id="demo-mutiple-chip"
                  multiple
                  value={day}
                  onChange={handleDays}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          className={classes.chip}
                        />
                      ))}
                    </div>
                  )}
                >
                  {totalDays.map((day) => (
                    <MenuItem key={day} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel>Max Appointments</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={maxAppointment}
                  onChange={handleMaxAppointment}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                    <MenuItem value={val}>{val}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div>
          <Button
            onClick={submitForm}
            className={classes.button}
          >
            {" "}
            <Typography variant="button">Submit Doctor Form</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;

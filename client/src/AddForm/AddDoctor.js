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
});

function AddDoctor(props) {
  const classes = useStyles();

  const totalDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const [speciality, setSpeciality] = React.useState("");
  const [day, setDay] = React.useState([]);
  const [maxAppointment, setMaxAppointment] = React.useState([]);

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
      props.setFalse()
  }

  return (
    <div className={classes.root}>
      <div>
        <IconButton onClick={temp} className={classes.back}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className={classes.right}>
        <div>
          <Typography>Fill Details below to add new doctor.</Typography>
        </div>
        <div className={classes.form}>
          <div className={classes.formLeft}>
            <TextField
              className={classes.Text}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              className={classes.Text}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
            <TextField
              className={classes.Text}
              id="outlined-basic"
              label="Contact Number"
              variant="outlined"
            />
            <TextField
              className={classes.Text}
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
            style={{
              border: "1px solid #023047",
              padding: "1rem 2rem",
              color: "#023047",
              boxShadow:'3px 3px 1px 0.2px grey'
            }}
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

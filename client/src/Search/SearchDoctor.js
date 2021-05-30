import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import { useData } from "../Context";
import { getDoctorsData } from "../API";
const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    // border: "1px solid grey",
    height: "10vh",
    alignItems: "center",
  },
  icon: {
    margin: "1rem",
    color: "grey",
    fontSize: "2rem",
  },
  search: {
    marginRight: "1rem",
    width: "200%",
  },
});

function SearchDoctor() {
  const { value_doctors_data } = useData();
  const [doctorsData, setDoctorsData] = value_doctors_data;

  const [speciality, setSpeciality] = React.useState("");
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");

  const handleSpeciality = (eve) => {
    setSpeciality(eve.target.value);
  };
  const handleName = (eve) => {
    setName(eve.target.value);
  };
  const handleId = (eve) => {
    setId(eve.target.value);
  };

  React.useEffect(() => {
    const handleSearch = async () => {
      var tempDoctorsData = [];
      const tdoctorsData = await getDoctorsData();
      tdoctorsData.map((each_data) => {
        if (
          each_data.firstName.includes(name) &&
          each_data.speciality.includes(speciality) &&
          each_data.doctorID.includes(id)
        )
          tempDoctorsData.push({ ...each_data });
      });
      setDoctorsData(tempDoctorsData);
    };
    handleSearch();
  }, [speciality, name, id]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <SearchIcon className={classes.icon} />
      </div>
      <div className={classes.search}>
        <TextField
          value={name}
          onChange={handleName}
          style={{ width: "100%" }}
          id="outlined-basic"
          placeholder="Name"
          variant="outlined"
        />
      </div>
      <div className={classes.search}>
        <TextField
          value={id}
          onChange={handleId}
          style={{ width: "100%" }}
          id="outlined-basic"
          placeholder="Doctor's ID"
          variant="outlined"
        />
      </div>
      <div className={classes.search}>
        <FormControl
          style={{ width: "100%" }}
          label="Speciality"
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Speciality
          </InputLabel>
          <Select
            value={speciality}
            onChange={handleSpeciality}
            label="Speciality"
            placeholder="Speciality"
            variant="outlined"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"Pediatrics"}>Pediatrics</MenuItem>
            <MenuItem value={"Cardiology"}>Cardiology</MenuItem>
            <MenuItem value={"Ophthalmology"}>Ophthalmology</MenuItem>
            <MenuItem value={"Gynaecology"}>Gynaecology</MenuItem>
            <MenuItem value={"Physical Theraphy"}>Physical Theraphy</MenuItem>
            <MenuItem value={"General Therapy"}>General Therapy</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default SearchDoctor;

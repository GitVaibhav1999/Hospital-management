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
  noBorder: {
    border: "none",
  },
  root: {
    display: "flex",
    width: "100%",
    // border: "1px solid grey",
    height: "8vh",
    alignItems: "center",
    border: "1px solid lightgrey",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
    marginBottom: "2rem",
    borderRadius: "40px",
  },
  icon: {
    margin: "1rem",
    color: "grey",
    fontSize: "2rem",
  },
  search: {
    marginRight: "0.5rem",
    width: "200%",
    borderRadius: "40px",
    border: "1px solid #d3d3d3",
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
          variant="outlined"
          disableUnderline={false}
          placeholder="Patient Name"
          InputProps={{
            classes: { notchedOutline: classes.noBorder },
          }}
          placeholder="Name"
          variant="outlined"
        />
      </div>
      <div className={classes.search}>
        <TextField
          value={id}
          onChange={handleId}
          variant="outlined"
          disableUnderline={false}
          placeholder="Patient Name"
          InputProps={{
            classes: { notchedOutline: classes.noBorder },
          }}
          placeholder="Doctor's ID"
          variant="outlined"
        />
      </div>
      <div className={classes.search}>
        <FormControl
          style={{ width: "100%" }}
          label="Speciality"
          className={classes.formControl}
        >
          <InputLabel
            style={{ paddingLeft: "3rem" }}
            id="demo-simple-select-outlined-label"
          >
            Speciality
          </InputLabel>
          <Select
            disableUnderline={true}
            style={{ margin: "1rem", paddingLeft: "1rem",height:'3vh' }}
            value={speciality}
            onChange={handleSpeciality}
            label="Speciality"
            placeholder="Speciality"
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

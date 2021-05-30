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
import { getDoctorsData, getPatientsData } from "../API";
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

function SearchPatients() {
  const { value_patients_data } = useData();
  const [patientsData, setPatientsData] = value_patients_data;

  const [age, setAge] = React.useState("");
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");

  const handleAge = (eve) => {
    setAge(eve.target.value);
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
      const tdoctorsData = await getPatientsData();
      tdoctorsData.map((each_data) => {
        if (
          each_data.firstName.includes(name) &&
          each_data.age.includes(age) &&
          each_data.patientID.includes(id)
        )
          tempDoctorsData.push({ ...each_data });
      });
      setPatientsData(tempDoctorsData);
    };
    handleSearch();
  }, [age, name, id]);

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
          placeholder="Patient's Name"
          variant="outlined"
        />
      </div>
      <div className={classes.search}>
        <TextField
          value={id}
          onChange={handleId}
          style={{ width: "100%" }}
          id="outlined-basic"
          placeholder="Patient's ID"
          variant="outlined"
        />
      </div>
      <div className={classes.search}>
        <TextField
          value={age}
          onChange={handleAge}
          style={{ width: "100%" }}
          id="outlined-basic"
          placeholder="Patient's Age"
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default SearchPatients;

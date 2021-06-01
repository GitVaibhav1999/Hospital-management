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
    marginRight: "1rem",
    width: "200%",
    borderRadius: "40px",
    border: "1px solid #d3d3d3",
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
          onChange={handleName}
          value={name}
          variant="outlined"
          disableUnderline={false}
          placeholder="Patient Name"
          InputProps={{
            classes: { notchedOutline: classes.noBorder },
          }}
        />
      </div>
      <div className={classes.search}>
        <TextField
          onChange={handleId}
          value={id}
          variant="outlined"
          disableUnderline={false}
          placeholder="Patient ID"
          InputProps={{
            classes: { notchedOutline: classes.noBorder },
          }}
        />
      </div>
      <div className={classes.search}>
        <TextField
          variant="outlined"
          onChange={handleAge}
          value={age}
          disableUnderline={false}
          placeholder="Patient Age"
          InputProps={{
            classes: { notchedOutline: classes.noBorder },
          }}
        />
      </div>
    </div>
  );
}

export default SearchPatients;

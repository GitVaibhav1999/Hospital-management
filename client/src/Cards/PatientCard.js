import { IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Paper } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
    width: "15vw",
    height: "12vh",
    fontSize: "0.5em",
    padding: "1.4rem 1.5rem",
    textAlign: "left",
    border: "1px solid #e07a5f",
    borderRadius: "2rem",
    boxShadow: "1px 1px 2px 0.4px #e07a5f",
  },
  detail: {
    color: "#e07a5f",
    flexGrow: "1",
  },
  delete: {
      display:'flex',
    "$:hover": {
      color: "red",
      marginLeft: "2rem",
    },
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    direction: "row",
    alignItems: "center",
  },
  png:{
      fill:'red'
  }
}));

function PatientCard() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <div className={classes.detail}>
        <div className={classes.top}>
          <span style={{ flexGrow: "1" }}>
            <Typography variant="h4">Vaibhav</Typography>
            <Typography>Age: 35</Typography>
          </span>
        </div>

        <Typography variant="subtitle1">ID: R11E5551</Typography>
      </div>
      <span className={classes.delete}>
          <div style={{flexGrow:'1'}}></div>
        <IconButton>
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton>
          <DeleteOutlineIcon />
        </IconButton>
      </span>
    </div>
  );
}
export default PatientCard;

import React from "react";
import { Button, ButtonGroup, IconButton, makeStyles } from "@material-ui/core";

import { useData } from "../Context";
import EachSlot from "./EachSlot";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "90vh",
    // border:"1px solid black",
    overflow: "auto",
  },
  back: {
    border: "1px solid #023047",
    margin: "1rem",
  },
  empty: {
    color: "grey",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "50vh",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
  },
  button: {
    marginRight: "1rem",
    marginTop: "1rem",
    "&:hover": {
      transform: "scale(1.2)",
      backgroundColor: "lightpink",
    },
  },
});

function ShowSlots() {
  const classes = useStyles();

  const { value_app_detail, value_show_slots } = useData();
  const [appDetail, setAppDetail] = value_app_detail;
  const [showSlots, setShowSlots] = value_show_slots;

  const back = () => {
    setShowSlots(false);
  };

  return (
    <div className={classes.root}>
      {/* <div>
        <IconButton onClick={back} className={classes.back}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className={classes.right}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <EachSlot />
        ))}
      </div> */}
      <div className={classes.empty}>
        <div>
          <HourglassEmptyIcon
            style={{ width: "6vw", height: "6vh", color: "#e07a5f" }}
          />
        </div>
        <div>Currently No Slots are available !</div>
        <div>Add this appointment to pending ?</div>
        <div>
          <Button className={classes.button} variant="outlined">
            YES
          </Button>
          <Button className={classes.button} variant="outlined">
            NO
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShowSlots;

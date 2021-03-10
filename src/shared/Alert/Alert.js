import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  alert: {
    display: "block",
    width: 200,
    color: "orange",
    backgroundColor: "fuchsia",
  },
});

function Alert(props) {
  const classes = useStyles();
  return <h1 className={classes.alert}>Oh hi there!</h1>;
}

export default Alert;

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(({ palette }) => {
  let { error, secondary, primary, warning } = palette;
  return {
    alert: {
      borderRadius: 4,
      minWidth: 200,
      fontSize: "0.875rem",
      padding: "6px 16px",
      textAlign: "center",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: `Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      lineHeight: 1.7,
      letterSpacing: "0.01071em",
    },
    error: {
      backgroundColor: error.main,
      color: error.contrastText,
    },
    info: { backgroundColor: secondary.main, color: secondary.contrastText },
    success: {
      backgroundColor: primary.main,
      color: primary.contrastText,
    },
    warning: {
      backgroundColor: warning.main,
      color: warning.contrastText,
    },
    text: {
      display: "block",
      flexGrow: 1,
    },
  };
});

function Alert({ severity, text }) {
  function renderIcon() {
    switch (severity) {
      case "info":
        return <InfoIcon />;
      case "error":
        return <ErrorOutlineIcon />;
      case "success":
        return <CheckCircleOutlineIcon />;
      case "warning":
        return <WarningIcon />;
      default:
        return <ErrorOutlineIcon />;
    }
  }
  const classes = useStyles();
  return (
    <div className={clsx(classes.alert, classes[severity])}>
      {renderIcon()}
      <span className={classes.text}>{text}</span>
    </div>
  );
}

export default Alert;

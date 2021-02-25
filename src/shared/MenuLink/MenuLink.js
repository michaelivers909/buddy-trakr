import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  link: {
    padding: 10,
    height: 20,
    "&:not(.active):hover": {
      backgroundColor: "#d36135",
    },
  },
  active: {
    backgroundColor: "#6aa397",
    color: "white",
  },
  text: {
    marginRight: 100,
  },
  iconContainer: {
    height: "100%",
    marginLeft: 20,
  },
  icon: {
    display: "block",
    margin: "auto",
    height: "100%",
  },
});

export default function MenuLink({ to, text, icon }) {
  const classes = useStyles();
  return (
    <NavLink
      to={`/${to}`}
      className={clsx(classes.link, "flex flex-wrap flex-between")}
      activeClassName={classes.active}
    >
      <div className={classes.iconContainer}>
        <FontAwesomeIcon className={classes.icon} icon={icon} />
      </div>
      <span className={classes.text}>{text}</span>
    </NavLink>
  );
}

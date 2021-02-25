import React from "react";
import "./MenuLink.css";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuLink({ to, text, icon }) {
  return (
    <NavLink
      to={`/${to}`}
      className={"link flex flex-wrap flex-between"}
      activeClassName={"active"}
    >
      <div className={"icon-container"}>
        <FontAwesomeIcon className={"icon"} icon={icon} />
      </div>
      <span className={"text"}>{text}</span>
    </NavLink>
  );
}

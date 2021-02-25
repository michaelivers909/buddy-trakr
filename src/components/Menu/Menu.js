import React, { useState } from "react";
import clsx from "clsx";
import "./Menu.css";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuLink from "../../shared/MenuLink/MenuLink";
import MenuOptions from "../../shared/menuOptions.json";

const useStyles = makeStyles({
  list: {
    width: 200,
    backgroundColor: "#ddd8c4",
  },
});

export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              style={{ marginLeft: "auto" }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor={"left"}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div
            role="presentation"
            className={clsx(classes.list)}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {MenuOptions.map((opt) => (
              <MenuLink
                key={opt.to}
                to={opt.to}
                icon={opt.icon}
                status={opt.status}
                text={opt.text}
              />
            ))}
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

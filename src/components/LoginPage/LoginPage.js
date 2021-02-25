import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  loginImg: {
    display: "block",
    maxHeight: 200,
    margin: "20px auto",
    maxWidth: "50%",
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <img className={classes.loginImg} src="/images/logos/main_logo.png" />
      <h5 className="text-center">Your buddies are expecting you!</h5>
      <h3 className="text-center">Please Sign In</h3>
      <form className="generic-form">
        <TextField
          className="generic-input"
          error
          label="Username"
          placeholder="Username"
          helperText="Username must be between 3 and 16 characters"
        />
        <TextField
          className="generic-input"
          error
          label="Password"
          type="password"
          placeholder="Password"
          helperText="Password must be between 8 and 128 characters"
        />
      </form>
    </>
  );
};

export default LoginPage;

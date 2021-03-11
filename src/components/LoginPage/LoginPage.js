import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useValidate } from "../../hooks/useValidate";
import ValidatedInput from "../../shared/ValidatedInput/ValidatedInput";
import { useForm } from "../../hooks/useForm";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "../../shared/Alert/Alert";

const useStyles = makeStyles({
  loginImg: {
    display: "block",
    maxHeight: 200,
    margin: "20px auto",
    maxWidth: "50%",
  },
});

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const username = useValidate({
    fieldName: "username",
    startingValue: "",
    minLength: 3,
    maxLength: 16,
    required: true,
  });

  const password = useValidate({
    fieldName: "password",
    startingValue: "",
    minLength: 8,
    maxLength: 128,
    required: true,
  });

  const loginForm = useForm(() => {
    setOpen(true);
    console.log(loginForm.value);
  }, [username, password]);
  const classes = useStyles();
  return (
    <>
      <img
        className={classes.loginImg}
        alt="Main Logo"
        src="/images/logos/main_logo.png"
      />
      <h5 className="text-center">Your buddies are expecting you!</h5>
      <h3 className="text-center">Please Sign In</h3>
      <form className="generic-form">
        <ValidatedInput
          className="generic-input"
          field={username}
          placeholder="Username"
          helperText="Username must be between 3 and 16 characters"
        />{" "}
        <ValidatedInput
          className="generic-input"
          field={password}
          placeholder="Password"
          helperText="Password must be between 8 and 128 characters"
        />
        <Button
          className="submit-button"
          variant="contained"
          color="primary"
          disabled={!loginForm.valid}
          onClick={() => loginForm.submit()}
        >
          Login
        </Button>
      </form>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={10000}
        onClose={() => setOpen(false)}
      >
        <Alert text="THIS IS A TEST" severity="info" />
      </Snackbar>
    </>
  );
};

export default LoginPage;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#87b5ab",
      main: "#6aa397",
      dark: "#4a7269",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e3dfcf",
      main: "#ddd8c4",
      dark: "#9a9789",
      contrastText: "#000",
    },
    error: {
      dark: "#934325",
      main: "#d36135",
      light: "#db805d",
      contrastText: "#fff",
    },
  },
});

ReactDOM.render(
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

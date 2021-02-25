import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { useIcons } from "./hooks/useIcons";
import FriendsPage from "./components/FriendsPage/FriendsPage";
import BuddyPage from "./components/BuddyPage/BuddyPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import UserProvider from "./context/UserContext";
import BuddyProvider from "./context/BuddyContext";
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

function App() {
  useIcons();
  return (
    <MuiThemeProvider theme={theme}>
      <UserProvider>
        <BuddyProvider>
          <Router>
            <Menu />
            <Switch>
              <Route path="/about" component={AboutPage} />
              <Route path="/settings" component={SettingsPage} />
              <Route path="/friends" component={FriendsPage} />
              <Route path="/buddies" component={BuddyPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </Router>
        </BuddyProvider>
      </UserProvider>
    </MuiThemeProvider>
  );
}

export default App;

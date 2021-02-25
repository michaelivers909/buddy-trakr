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

function App() {
  useIcons();
  return (
    <UserProvider>
      <BuddyProvider>
        <Router>
          <Menu />
          <div className="page-container">
            <Switch>
              <Route path="/about" component={AboutPage} />
              <Route path="/settings" component={SettingsPage} />
              <Route path="/friends" component={FriendsPage} />
              <Route path="/buddies" component={BuddyPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </div>
        </Router>
      </BuddyProvider>
    </UserProvider>
  );
}

export default App;

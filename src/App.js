import "./App.css";
import React, { useMemo } from "react";
import AboutPage from "./components/AboutPage/AboutPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { useIcons } from "./hooks/useIcons";
import FriendsPage from "./components/FriendsPage/FriendsPage";
import BuddyPage from "./components/BuddyPage/BuddyPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import UserProvider from "./context/UserContext";
import BuddyProvider from "./context/BuddyContext";
import ProtectedRoute from "./shared/ProtectedRoute/ProtectedRoute";

function App() {
  useIcons();
  const isAuth = useMemo(() => true, []);
  return (
    <UserProvider>
      <BuddyProvider>
        <Router>
          <Menu />
          <div className="page-container">
            <Switch>
              <Route path="/about" component={AboutPage} />
              <ProtectedRoute
                authenticated={isAuth}
                userOnly={true}
                redirect={"/login"}
                path="/settings"
                component={SettingsPage}
              />
              <ProtectedRoute
                authenticated={isAuth}
                userOnly={true}
                path="/friends"
                redirect={"/login"}
                component={FriendsPage}
              />
              <ProtectedRoute
                authenticated={isAuth}
                userOnly={true}
                path="/buddies"
                redirect={"/login"}
                component={BuddyPage}
              />
              <ProtectedRoute
                authenticated={isAuth}
                userOnly={false}
                path="/register"
                redirect={"/buddies"}
                component={RegisterPage}
              />
              <ProtectedRoute
                authenticated={isAuth}
                userOnly={false}
                path="/login"
                redirect={"/buddies"}
                component={LoginPage}
              />
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </div>
        </Router>
      </BuddyProvider>
    </UserProvider>
  );
}

export default App;

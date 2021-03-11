import React from "react";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({
  authenticated,
  userOnly,
  redirect,
  path,
  component,
}) => {
  //   if ((authenticated && !userOnly) || (!authenticated && userOnly)) {
  if (false) {
    return <Redirect to={redirect} />;
  }
  return <Route path={path} component={component} />;
};

export default ProtectedRoute;

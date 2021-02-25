import React from "react";

const initialState = {};

export const UserContext = React.createContext(null);

const UserProvider = (props) => {
  const user = initialState;
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
export default UserProvider;

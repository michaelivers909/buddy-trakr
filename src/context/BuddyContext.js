import React from "react";

const initialState = [];

export const BuddyContext = React.createContext(null);

const BuddyProvider = (props) => {
  const buddies = initialState;
  return (
    <BuddyContext.Provider value={buddies}>
      {props.children}
    </BuddyContext.Provider>
  );
};
export default BuddyProvider;

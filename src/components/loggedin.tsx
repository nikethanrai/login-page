import React, { useContext } from "react";
import AppContext from "./Appcontext";

const LoggedIn = () => {
  const state = useContext(AppContext);
  return (
    <div>
      Welcome
      <h2></h2>
    </div>
  );
};

export default LoggedIn;

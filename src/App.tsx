import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AppContext from "./components/Appcontext";
import Login from "./components/login";
import Home from "./components/Home";
import LoggedIn from "./components/loggedin";
import Navigation from "./components/Navigation";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <AppContext.Provider value={{ auth, setAuth }}>
      <div className="App">
        <Navigation />
        <BrowserRouter>
          <Route path="/login" exact component={Login} />
          <Route path="/loggedin" exact component={LoggedIn} />
          <Route path="/" exact component={Home} />
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
};

export default App;

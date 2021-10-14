import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "./components/Appcontext";
import Login from "./components/login";
import Profile from "./components/myprofile";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Contact from "./components/contact";

const App = () => {
  const [auth, setAuth] = useState(false);
  const [userDeets, setUserDeets] = useState("");

  return (
    <AppContext.Provider value={auth}>
      <div className="App">
        <BrowserRouter>
          <Navigation setUserDeets={setUserDeets} />
          <Switch>
            <Route
              path="/login"
              exact
              component={() => <Login setAuth={setAuth} />}
            />
            <Route path="/contact" component={Contact} />
            <Route
              path="/profile"
              component={() => <Profile userDeets={userDeets} />}
            />
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
};

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login";
import LoggedIn from "./components/loggedin";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/loggedin" exact component={LoggedIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;

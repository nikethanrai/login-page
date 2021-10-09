import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import AppContext from "./Appcontext";

import "./Home.css";

const Home = () => {
  const auth = useContext(AppContext);

  return (
    <Container className="d-flex justify-content-center align-items-center Home ">
      <h1>
        Welcome to the Home page. <br />
        {sessionStorage.getItem("token") ? "" : "Login to continue"}
      </h1>
    </Container>
  );
};

export default Home;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import "./Home.css";

const Home = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center Home ">
      <h1>
        Welcome to the Home page. <br />
        Login to continue.
      </h1>
    </Container>
  );
};

export default Home;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./contact.css";
import { Container } from "react-bootstrap";

const Contact = () => {
  if (!sessionStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <Container className="d-flex justify-content-center align-items-center Contact ">
      <h1>Contact us</h1>
    </Container>
  );
};

export default Contact;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { Container } from "react-bootstrap";
import "./myprofile.css";

const Profile = () => {
  if (!sessionStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <Container className="d-flex justify-content-center align-items-center Profile ">
      <h1>My Profile</h1>
    </Container>
  );
};

export default Profile;

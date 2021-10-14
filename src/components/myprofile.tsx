import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { Container, Col, Row, Image } from "react-bootstrap";
import "./myprofile.css";

interface userdeets {
  userDeets: any;
}

const Profile: React.FC<userdeets> = ({ userDeets }) => {
  if (!sessionStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <Container className="d-flex justify-content-center align-items-center Profile ">
      <Container>
        <Row>
          <Col md="auto">
            <Container className="profile-pic">
              <Image
                className=" border border-info border-4"
                id="profile-pic"
                src={userDeets.profilePic}
                alt=""
                roundedCircle
              />
            </Container>
          </Col>
          <Col>
            <Container className="profile">
              <h4> Display Name : {userDeets.displayName}</h4>
              <br />
              <h4> Username : {userDeets.username}</h4>
              <br />
              <h4>Password : {userDeets.password}</h4>
              <br />
              <h4> Zipcode : {userDeets.zipCode}</h4>
              <br />
              <h4> Phone Number : {userDeets.phoneNumber}</h4>
              <br />
              <h4> First Name : {userDeets.firstName}</h4>
              <br />
              <h4> Last Name : {userDeets.lastName}</h4>
              <br />
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Profile;

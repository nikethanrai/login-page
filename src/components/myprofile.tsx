import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Image,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import "react-edit-text/dist/index.css";
import "./myprofile.css";
import { EditText, EditTextarea } from "react-edit-text";

interface userdeets {
  userDeets: any;
}

const Profile: React.FC<userdeets> = ({ userDeets }) => {
  const [editUserDeets, setEditUserDeets] = useState(userDeets);
  const [alertState, setAlertState] = useState(false);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setAlertState(true);
    setTimeout(() => {
      setAlertState(false);
    }, 3000);
  };
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
                src={editUserDeets.profilePic}
                alt=""
                roundedCircle
              />
            </Container>
          </Col>
          <Col>
            <Form>
              <Container className="profile">
                <b>Username </b>[read only]<b>:</b>
                <EditText
                  defaultValue={editUserDeets.username}
                  readonly
                  className="user-info"
                />
                <b>Password :</b>
                <EditText
                  defaultValue={editUserDeets.password}
                  placeholder="Password"
                  className="user-info "
                />
                <br />
                <b>Display Name </b>
                <EditText
                  defaultValue={editUserDeets.displayName}
                  placeholder="Display Name"
                  className="user-info"
                />
                <b>First Name :</b>{" "}
                <EditText
                  defaultValue={editUserDeets.firstName}
                  placeholder="first name"
                  className="user-info"
                />
                <b>Last Name :</b>{" "}
                <EditText
                  defaultValue={editUserDeets.lastName}
                  placeholder="last name"
                  className="user-info"
                />
                <b>Phone Number :</b>
                <EditText
                  defaultValue={editUserDeets.phoneNumber}
                  placeholder="phone number"
                  className="user-info"
                />
                <b>Zipcode :</b>{" "}
                <EditText
                  defaultValue={editUserDeets.zipCode}
                  placeholder="zipcode"
                  className="user-info"
                />
                <Button onClick={submitHandler} type="submit">
                  Save
                </Button>
                <Button variant="danger" className="px-2 m-3">
                  Cancel
                </Button>
                <div id="alert">
                  {" "}
                  {alertState ? (
                    <Alert variant="success">user details updated!!</Alert>
                  ) : (
                    ""
                  )}
                </div>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Profile;

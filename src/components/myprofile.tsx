import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Image,
  Button,
  Form,
  InputGroup,
  Alert,
} from "react-bootstrap";
import "./myprofile.css";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  username: yup.string().required(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  displayName: yup.string(),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Add  a 10 digit number "
    ),
  zip: yup.string().nullable(),
});

interface userdeets {
  userDeets: any;
}

const Profile: React.FC<userdeets> = ({ userDeets }) => {
  const [editUserDeets, setEditUserDeets] = useState(userDeets);
  const [alertState, setAlertState] = useState(false);
  const [cancelState, setCancelState] = useState(false);
  const [defaultState, setDefaultState] = useState(false);

  const cancelHandler = (e: any) => {
    setDefaultState(true);
    setTimeout(() => {
      setDefaultState(false);
    }, 1000);
  };

  if (!sessionStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }

  return (
    <Container className=" justify-content-center  Profile ">
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
          <Formik
            validationSchema={schema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              console.log(values.firstName);
              if (cancelState) {
                resetForm();
                setDefaultState(true);
                setCancelState(false);
                setTimeout(() => {
                  setDefaultState(false);
                }, 1000);
              } else {
                setAlertState(true);

                setTimeout(() => {
                  setAlertState(false);
                }, 1000);

                const updateProfile = await fetch(
                  "https://anisoft.us/chatapp/api/user/updateuser",
                  {
                    method: "POST",

                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${sessionStorage.getItem(
                        "token"
                      )}`,
                    },
                    body: JSON.stringify({
                      displayName: values.displayName,
                      username: values.username,
                      password: values.password,
                      zipCode: values.zip,
                      phoneNumber: values.phoneNumber,
                      firstName: values.firstName,
                      lastName: values.lastName,
                      isPublic: 0,
                      calendarName: null,
                      profilePic: editUserDeets.profilePic,
                    }),
                  }
                );
                try {
                  const output = await updateProfile.text();
                  console.log(output);
                } catch (error) {
                  console.log(error);
                }

                setTimeout(() => {
                  setSubmitting(false);
                }, 500);
              }
            }}
            initialValues={{
              firstName: editUserDeets.firstName,
              lastName: editUserDeets.lastName,
              username: editUserDeets.username,
              password: editUserDeets.password,
              phoneNumber: editUserDeets.phoneNumber,
              displayName: editUserDeets.displayName,
              zip: editUserDeets.zipCode,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">-</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onBlur={handleBlur}
                      isInvalid={!!errors.username}
                      readOnly
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFormik01">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.password}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationFormik02">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormik03">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.lastName}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormikUsername"
                  ></Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFormik04">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Display Name"
                      name="displayName"
                      value={values.displayName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={!!errors.displayName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.displayName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationFormik05">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={!!errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormik06">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Zip"
                      name="zip"
                      value={values.zip}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.zip}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.zip}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button type="submit" disabled={isSubmitting}>
                  Save
                </Button>
                <Button
                  type="submit"
                  className="px-2 m-3"
                  variant="danger"
                  onClick={(e: any) => setCancelState(true)}
                >
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
                <div id="alert">
                  {" "}
                  {defaultState ? (
                    <Alert variant="danger">No changes applied!!</Alert>
                  ) : (
                    ""
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

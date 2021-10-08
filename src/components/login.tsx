import React, { SyntheticEvent, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./login.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [err, setErr] = useState(false);

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch(
      "https://anisoft.us/chatapp/api/user/validateuser",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Username": email,
          "Password": password,
        }),
      }
    );
    try {
      const content = await response.text();
      console.log(content);
      setToken(content);

      if (content == "") {
        setErr(true);
        setToken("");
      }
      sessionStorage.setItem(email, token);
    } catch (error) {
      console.log(error);
      console.log("erroorr!!!");
    }
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center login-page ">
        <h1 className="title">Login Page</h1>
        {err ? <div> Details don't match</div> : ""}

        <Form className="login-sec " onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>User name</Form.Label>
            <Form.Control
              placeholder="UserName"
              onChange={(e: any) => setUserName(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;

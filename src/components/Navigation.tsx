import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Container from "react-bootstrap/Container";
import AppContext from "./Appcontext";

interface info {
  logInfo: any;
}
const Navigation: React.FC<info> = ({ logInfo }) => {
  const auth = useContext(AppContext);
  console.log(logInfo.username);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="px-3" href="/">
                Home
              </Nav.Link>

              {sessionStorage.getItem("token") ? (
                <>
                  <Nav.Link className="px-3" href="/contact">
                    Contact us
                  </Nav.Link>
                  <NavDropdown
                    className="px-3"
                    title={logInfo.username}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/profile">
                      Your Profile
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="/login"
                      className="px-3"
                      onClick={() => sessionStorage.clear()}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link href="/login" className="px-3">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

interface deets {
  setUserDeets: any;
}
const Navigation: React.FC<deets> = ({ setUserDeets }) => {
  const ProfileHandler = async (e: any) => {
    console.log("in ");
    const profile = await fetch(
      "https://anisoft.us/chatapp/api/user/getuserdetails",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    try {
      const output = await profile.text();
      console.log("hello");
      console.log(output);
      setUserDeets(JSON.parse(output));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="px-3" as={Link} to="/">
                Home
              </Nav.Link>

              {sessionStorage.getItem("token") ? (
                <>
                  <Nav.Link className="px-3" as={Link} to="/contact">
                    Contact us
                  </Nav.Link>
                  <NavDropdown
                    className="px-3"
                    title="info@anisoft.us"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/profile"
                      onClick={ProfileHandler}
                    >
                      Your Profile
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="/login"
                      className="px-3 text-danger

                      "
                      onClick={() => sessionStorage.clear()}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link as={Link} to="/login" className="px-3">
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

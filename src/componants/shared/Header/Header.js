import React from "react";
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, handleLogOut } = useAuth();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <Image src="https://i.ibb.co/ZdNnN5K/image.png" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="fw-bold">
            <Nav className="me-auto align-items-center">
              <Nav.Link as={Link} to="/admin">
                <Button variant="secondary">Admin</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#plans">
                Plans
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#faq">
                FAQ
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link disabled>{user ? user.displayName : ""}</Nav.Link>
              {user.displayName ? (
                <Button onClick={handleLogOut} variant="outline-danger">
                  Sign out
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Sign in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

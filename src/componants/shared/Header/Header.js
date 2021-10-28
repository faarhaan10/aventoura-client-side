import React from "react";
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
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
              <Nav.Link as={Link} to="/plans">
                Plans
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/faq">
                FAQ
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/deets">
                More deets
              </Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

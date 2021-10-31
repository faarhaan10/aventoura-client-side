import React from "react";
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, handleLogOut } = useAuth();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="light" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <Image src="https://i.ibb.co/ZdNnN5K/image.png" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="fw-bold">
            <Nav className=" align-items-center">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/packages">
                Packages
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#faq">
                FAQ
              </Nav.Link>
            </Nav>
            {user.displayName ? <Nav className='me-auto'>
              <Nav.Link as={Link} to="/myplans">
                My Plan's
              </Nav.Link>
              <Nav.Link as={Link} to="/manageplans">
                Manage Plans
              </Nav.Link>
              <Nav.Link as={Link} to="/addpackage">
                Add Package
              </Nav.Link>
            </Nav>
              :
              <div className='me-auto'></div>}
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

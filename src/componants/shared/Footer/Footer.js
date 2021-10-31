import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <Row className="py-5 my-5">
          <Col xs={12} md={6} lg={4}>
            <Image src="https://i.ibb.co/5FYMftL/image.png" fluid />
            <p className="mt-3 text-secondary">
              The world’s first luxury travel subscription just got even better.
              Still no nightly rates, taxes, or fees, and now with more
              flexibility, value, and trips than ever before
            </p>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <h5 className="mb-3 aventoura-color">Company</h5>

            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="py-0 text-white">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="py-0 text-white">
                Our team
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="py-0 text-white">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="py-0 text-white">
                Services
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <h5 className="mb-3 aventoura-color">Support</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="py-0 text-white">
                Help Center
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="py-0 text-white">
                Ticket Support
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="py-0 text-white">
                FAQ
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="py-0 text-white">
                Contact us
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h5 className="mb-3 aventoura-color">Office</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="py-0 text-white">
                Aventoura, Dhanmandi, Dhaka, Bangladesh
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="py-0 text-white">
                hello@aventoura.com
              </Nav.Link>
              <Nav.Link className="py-0 text-white">+(88)01-2020-2021</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          Copyright &copy; 2021 <span className="aventoura-color">Aventoura</span> . A Programing Hero Initiative
        </p>
      </Container>
    </div>
  );
};

export default Footer;

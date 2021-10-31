import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services">
      <Container className='pt-5'>
        <div className="">
          <h5 className="text-warning">FEATURED</h5>
          <h1 className="fs-1  fw-bolder">Explore new worlds with us</h1>
        </div>
        <Row className='py-5'>
          <Col xs={12} md={5}>
            <div className="position-relative overflow-hidden" style={{ height: '335px' }}>
              <Image fluid
                src='https://i.ibb.co/Mf4RQ85/adventure-in-the-sierra-min.jpg' />
              <div className="position-absolute top-0 text-white pt-5 ps-3 mt-3 overflow-hidden">
                <h1>Discount up 50%</h1>
                <p>Book your first trip with us take upto 50% discount based on the country you wanna travell</p>
                <Link to='/'>
                  <Button variant="warning" className="text-white px-5 py-2 fw-bold me-2" >Discover More</Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={7}>
            <div className="position-relative overflow-hidden" style={{ height: '335px' }}>
              <Image fluid
                src='https://i.ibb.co/YQ5KDvL/adventures-await-e1631464282351.jpg' />
              <div className="position-absolute top-0 text-white pt-5 mt-3 ps-3 overflow-hidden">
                <h1>Explore New Destination</h1>
                <p>Book your first trip with us take upto 50% discount based on the country you wanna travell</p>
                <Link to='/'>
                  <Button variant="warning" className="text-white px-5 py-2 fw-bold me-2" >Discover More</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;

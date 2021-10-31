import React from "react";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";

const Faq = () => {
  return (
    <div id="faq" className='pt-5'>
      <Container>
        <div className="text-center pt-5">
          <h5 className="text-warning">FAQ</h5>
          <h1 className="fs-1  fw-bolder">Frequently Ask Questions</h1>
        </div>
        <Row className='align-items-center'>
          <Col xs={12} md={6}>
            <Image fluid src="https://i.ibb.co/nQZGDH3/female-tourist.png" />
          </Col>
          <Col xs={12} md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header><strong>What is Aventoura?</strong></Accordion.Header>
                <Accordion.Body className="fw-bold">
                  Aventoura is a platform which allows you to create bookable experiences that travelers around the world can buy online, from guided tours to surf lessons—and everything in between. Suppliers who sell products with us reach customers via Tripadvisor, the Tripadvisor App, Aventoura.com and thousands more partner sites.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><strong>Who can register?</strong>
                </Accordion.Header>
                <Accordion.Body className="fw-bold">
                  Anyone can, from large tour operators to family-run vineyards or even a local expert offering a walking tour of their town or city. You just need to be aged 18 or over and comply with all applicable laws and regulations in which you operate.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><strong>How much does it cost?</strong>
                </Accordion.Header>
                <Accordion.Body className="fw-bold">
                  We review all new product listings to ensure they are set up for success with our travelers. Product Quality Reviews are required and carry a nonrefundable nominal cost per product. Our reviews ensure your product is best positioned to generate bookings.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header><strong>How much country I can visit?</strong>
                </Accordion.Header>
                <Accordion.Body className="fw-bold">
                  You can visite all over the world with us. We have thousands of locations, that can blow your mind
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;

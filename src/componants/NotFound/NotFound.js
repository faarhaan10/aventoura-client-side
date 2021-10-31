import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='vh-100 d-flex align-items-center'>
            <Container >
                <Row className='align-items-center'>
                    <Col xs={12} md={6} className='text-center'>
                        <Image fluid src="https://i.ibb.co/0VHMK7L/404-min.jpg" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h1>Oops</h1>
                        <h3>We have thousands of wonderfull locations than that</h3>
                        <Link to='/'>
                            <Button variant="warning" className="text-white px-3 fw-bold"> Come Back
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Packages = () => {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        fetch(`https://aventoura-server.herokuapp.com/packages`)
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                setLoading(false)
            })
    }, [])



    if (loading) {
        return (
            <div id="plans" className="d-flex justify-content-center align-items-center  vh-100">
                <div className="">
                    <Spinner className="p-5" animation="grow" variant="info" />
                </div>
            </div>
        );
    }

    const imageSize = {
        height: '234px',
        objectFit: 'cover'
    }
    return (
        <div id="packages" className="pt-5">
            <Container>
                <div className="pt-5">
                    <h1 className="fs-1  fw-bolder">All Popular Tour Package Plans</h1>
                </div>
                <div className="py-3">
                    <Row>
                        {
                            packages.map(plan => <Col
                                xs={12} md={6} lg={4}
                                key={plan._id}
                                className="d-flex justify-content-center"
                            >
                                <Card style={{ width: '22rem' }} className='my-3 aventoura-shadow'>
                                    <Card.Img variant="top" style={imageSize} className='p-2 mx-auto' src={plan.image} />

                                    <Card.Body className='text-center'>

                                        <Card.Title className='text-warning fw-bold'>{plan.tourTitle}</Card.Title>

                                        <Card.Text>{plan.description.slice(0, 70)}...
                                        </Card.Text>

                                        <Link to={`/placeorder/${plan._id}`}>
                                            <Button variant="warning" className="text-white px-5 py-2 fw-bold me-2" >Book</Button>
                                        </Link>

                                    </Card.Body>

                                    <Card.Footer>
                                        <div className="d-flex justify-content-between fw-bold">
                                            <span><i className="aventoura-color fas fa-map-marker-alt"></i> {plan.location}</span>
                                            <span><i className="aventoura-color far fa-clock"></i> {plan.duration} Days</span>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Packages;

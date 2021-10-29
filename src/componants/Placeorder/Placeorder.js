import React, { useEffect, useState } from "react";
import { Container, Row , Col, Image, Form, FloatingLabel,Button} from "react-bootstrap";
import { useParams } from "react-router";

const Placeorder = () => {
  const [plan,setPlan] = useState({});
  const { id } = useParams();
  const {image,tourTitile,description,duration,price,location} = plan;
  console.log(plan)
  // load single plan 
  useEffect( () => {
    fetch(`http://localhost:5000/plans/${id}`)
    .then(res => res.json())
    .then(data => setPlan(data))
  },[id])


  return (
    <div>
      <h1>this is place order</h1>
      <h2>id: {id}</h2>
      <Container>
        <Row className='align-items-center py-3'>
          <Col xs={12} md={6}>
            <Image className='rounded-pill' fluid src={image} />
          </Col>
          <Col xs={12} md={6}>
            <h4>{tourTitile}</h4>
            <p>{description}</p>
            <small>Location: {location}</small>
            <h5>You can stay <span className="text-warning fw-bold">{duration} days and {duration-1} nights</span> in this tour.</h5>
            
            <h4>Total cost: <span className="text-warning">${price}/Pack</span></h4>
          </Col>
        </Row>
        <Form>
        <Row className='align-items-center py-3'>
          <Col xs={12} md={6}>
            <FloatingLabel label="Full Name" className="mb-3" >
                <Form.Control type="text" placeholder="name" />
            </FloatingLabel>
            <FloatingLabel label="Email" className="mb-3" >
                <Form.Control type="email" placeholder="email" />
            </FloatingLabel>
          </Col>
          <Col xs={12} md={6}>
          <FloatingLabel label="Tour Package" className="mb-3" >
                <Form.Control type="text" placeholder="plan" />
            </FloatingLabel>
            <FloatingLabel label="Date" className="mb-3" >
                <Form.Control type="date" placeholder="date" />
            </FloatingLabel>
          </Col>
          <Button variant="warning" type='submit' className="w-25 mx-auto text-white px-5 py-3 fs-5 fw-bold"> Book now
          </Button>
        </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Placeorder;

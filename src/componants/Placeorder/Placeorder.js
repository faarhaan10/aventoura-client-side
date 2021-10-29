import React, { useEffect, useState } from "react";
import { Container, Row , Col, Image, Form, FloatingLabel,Button} from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Placeorder = () => {
  const [plan,setPlan] = useState({});
  const { register, handleSubmit } = useForm();
  const {user} = useAuth()
  const { id } = useParams();

  const {image,tourTitile,description,duration,price,location} = plan;
const planId = id;
const status = 'pending';

  const onSubmit = data => {
    const newData = {planId,status,...data};
    console.log(newData);

    fetch('http://localhost:5000/tourists',{
      method:'POST',
      headers:{'content-type':'application.json'},
      body: JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  };


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

{/* order placement form  */}
        {tourTitile && <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className='align-items-center py-3'>
  {/* mailing information */}
          <Col xs={12} md={6} className="px-5">
            <FloatingLabel label="Full Name" className="mb-3" >
                <Form.Control type="text" placeholder="name" 
                defaultValue={user.displayName}
                {...register("name", { required: true })}/>
            </FloatingLabel>
            <FloatingLabel label="Email" className="mb-3" >
                <Form.Control type="email" placeholder="email" 
                defaultValue={user.email}
                {...register("email", { required: true })}/>
            </FloatingLabel>
          </Col>

  {/* tour plan information */}
          <Col xs={12} md={6} className="px-5">
          <FloatingLabel label="Tour Package" className="mb-3" >
                <Form.Control type="text" placeholder="plan" 
                defaultValue={tourTitile}
                {...register("plan", { required: true } )}/>
            </FloatingLabel>
            <FloatingLabel label="Date" className="mb-3" >
                <Form.Control type="date" placeholder="date"
                 {...register("date", { required: true })}/>
            </FloatingLabel>
          </Col>

          <Button variant="warning" type='submit' className="w-25 mx-auto text-white px-5 py-3 fs-5 fw-bold"> Book now
          </Button>
        </Row>
        </Form>}
      </Container>
    </div>
  );
};

export default Placeorder;

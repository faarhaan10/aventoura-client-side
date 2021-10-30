import React, { useEffect, useState } from "react";
import { Container, Row , Col, Image, Form, FloatingLabel,Button} from "react-bootstrap";
import { useHistory, useParams } from "react-router";
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
  const history = useHistory();

  const onSubmit = data => {
    const newData = {planId,status,...data};
    console.log(newData);

    fetch('https://aventoura-server.herokuapp.com/tourists',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        alert('order pleced successfully');
        history.push('/');
      }
    })
  };


  // load single plan 
  useEffect( () => {
    fetch(`https://aventoura-server.herokuapp.com/plans/${id}`)
    .then(res => res.json())
    .then(data => setPlan(data))
  },[id])


  return (
    <div>
      <Container>
        <Row className='align-items-center py-3'>
          <Col xs={12} md={6} className="px-5">
            <Image className='rounded-pill' fluid src={image} />
          </Col>
          <Col xs={12} md={6} className="p-5">
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
            <FloatingLabel label="Location" className="mb-3" >
                <Form.Control type="text" placeholder="locationn" 
                defaultValue={location}
                {...register("location", { required: true })}/>
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
            <Form.Control type="submit" value="Book Now" className="bg-warning  text-white mb-3 py-3 fs-6 fw-bold"/>
           
          </Col>
        </Row>
        </Form>}
      </Container>
    </div>
  );
};

export default Placeorder;

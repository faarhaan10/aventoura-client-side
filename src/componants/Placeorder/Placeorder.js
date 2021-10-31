import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Form, FloatingLabel, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Placeorder = () => {
  const [plan, setPlan] = useState({});
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const { id } = useParams();

  const { image, tourTitle, description, duration, price, location } = plan;
  const planId = id;
  const status = 'pending';
  const history = useHistory();

  const onSubmit = data => {
    const newData = { planId, status, ...data };

    // send post request to db 
    fetch('https://aventoura-server.herokuapp.com/tourists', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          alert('order pleced successfully');
          history.push('/myplans');
        }
      })
  };


  // load single plan 
  useEffect(() => {
    setLoading(true);
    fetch(`https://aventoura-server.herokuapp.com/packages/${id}`)
      .then(res => res.json())
      .then(data => setPlan(data))
      .finally(() => setLoading(false))
  }, [id])

  // if loading show spinner 
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center  vh-100">
        <div className="">
          <Spinner className="p-5" animation="grow" variant="info" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <Row className='align-items-center py-5'>
          <Col xs={12} md={6} className="px-3">
            <Image className='p-2 border rounded-3 shadow' fluid src={image} />
          </Col>
          <Col xs={12} md={6} className="py-5 px-3">
            <h4>{tourTitle}</h4>
            <p>{description}</p>
            <small>Location: {location}</small>
            <h5>You can stay <span className="text-warning fw-bold">{duration} days and {duration - 1} nights</span> in this tour.</h5>

            <h4>Total cost: <span className="text-warning">${price}/Pack</span></h4>
          </Col>
        </Row>

        {/* order placement form  */}
        {tourTitle && <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className='align-items-center py-3'>
            {/* mailing information */}
            <Col xs={12} md={6} className="px-5">
              <FloatingLabel label="Full Name" className="mb-3" >
                <Form.Control type="text" placeholder="name"
                  defaultValue={user.displayName}
                  {...register("name", { required: true })} />
              </FloatingLabel>
              <FloatingLabel label="Email" className="mb-3" >
                <Form.Control type="email" placeholder="email"
                  defaultValue={user.email}
                  {...register("email", { required: true })} />
              </FloatingLabel>
              <FloatingLabel label="Location" className="mb-3" >
                <Form.Control type="text" placeholder="locationn"
                  defaultValue={location}
                  {...register("location", { required: true })} />
              </FloatingLabel>
            </Col>

            {/* tour plan information */}
            <Col xs={12} md={6} className="px-5">
              <FloatingLabel label="Tour Package" className="mb-3" >
                <Form.Control type="text" placeholder="plan"
                  defaultValue={tourTitle}
                  {...register("plan", { required: true })} />
              </FloatingLabel>
              <FloatingLabel label="Date" className="mb-3" >
                <Form.Control type="date" placeholder="date"
                  {...register("date", { required: true })} />
              </FloatingLabel>
              <Form.Control type="submit" value="Book Now" className="bg-warning  text-white mb-3 py-3 fs-6 fw-bold" />

            </Col>
          </Row>
        </Form>}
      </Container>
    </div>
  );
};

export default Placeorder;

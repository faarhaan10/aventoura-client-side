import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row ,Button, Spinner} from "react-bootstrap";
import { Link } from "react-router-dom";

const Plans = () => {

  const [plans,setPlans] = useState([]);
  const [loading,setLoading] = useState(true)
  const size = 6;
  useEffect(()=>{
    setLoading(true)
    fetch(`https://aventoura-server.herokuapp.com/plans?size=${size}`)
    .then(res => res.json())
    .then(data => {
      setPlans(data);
      setLoading(false)
    })
  },[])


  if (loading) {
    return (
      <div id="plans" className="d-flex justify-content-center align-items-center  vh-100">
        <div className="">
          <Spinner className="p-5" animation="grow" variant="info" />
        </div>
      </div>
    );
  }
  console.log(plans.length)
const imageSize = {
  width: '334px',
  height: '234px',
  objectFit: 'cover'
}
  return (
    <div id="plans">
      <Container>
        <div className="text-center pt-5">
          <h5 className="text-warning">FEATURED TOUR</h5>
          <h1 className="fs-1  fw-bolder">Popular Tour Package Plans</h1>
        </div>
        <div className="py-3">
          <Row>
            {
              plans.map(plan => <Col
               xs={12} md={6} lg={4}
               key={plan._id}
               className="d-flex justify-content-center"
               >
                <Card style={{ width: '22rem' }} className='my-3'>
                  <Card.Img variant="top" style={imageSize} className='p-2 pb-0 mx-auto' src={plan.image} />
                  <Card.Body className='text-center'>
                    <Card.Title>{plan.tourTitile}</Card.Title>
                    <Card.Text>{plan.description.slice(0,70)}...
                    </Card.Text>
                    <Link to={`/placeorder/${plan._id}`}>
                    <Button variant="warning"  className="text-white px-5 py-2 fw-bold me-2" >Book</Button>
                    </Link>
                  </Card.Body>
                  <Card.Footer>
                    <div className="d-flex justify-content-between">
                    <span><i className="fas fa-map-marker-alt"></i> {plan.location}</span>
                    <span><i className="far fa-clock"></i> {plan.duration} Days</span>
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

export default Plans;

import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('https://aventoura-server.herokuapp.com/packages', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Package Added Succesfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <Container>
                <div className="bg-warning text-center py-3 text-white rounded-3 my-3">
                    <h1>Add Tour Package</h1>
                </div>
                <div className="mt-5 py-5">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="g-2">
                            <Col xs={12} md={6}>
                                <FloatingLabel label="Tour Title">
                                    <Form.Control type="text" placeholder="title" {...register("tourTitile", { required: true })} />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                <FloatingLabel label="Location">
                                    <Form.Control type="text" placeholder="location" {...register("location", { required: true })} />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                <FloatingLabel label="Package Cost">
                                    <Form.Control type="number" placeholder="cost" {...register("price", { required: true })} />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                <FloatingLabel label="Duration (Days)">
                                    <Form.Control type="number" placeholder="duration" {...register("duration", { required: true })}
                                        defaultValue='3'
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                <FloatingLabel label="About the place">
                                    <Form.Control type="textarea" placeholder="description" {...register("description", { required: true })} />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={6}>
                                <FloatingLabel label="Image URL of the Place">
                                    <Form.Control type="text" placeholder="url" {...register("image", { required: true })} />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                            <div className='mx-2'>
                                <Form.Control type="submit" value="Add Package" className="bg-primary mx-auto text-white my-3 py-3 fs-6 fw-bold" style={{ width: '16rem' }} />
                            </div>
                            <div className='mx-2'>

                                <Link to='/packages'>
                                    <Form.Control type="button" value="See all" className="bg-primary mx-auto text-white my-3 py-3 fs-6 fw-bold" style={{ width: '16rem' }} />
                                </Link>
                            </div>
                        </div>
                    </Form>
                </div>

            </Container>
        </div>
    );
};

export default AddPackage;
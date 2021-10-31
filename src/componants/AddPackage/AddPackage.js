import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddPackage = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    // post new package to db 
    const onSubmit = data => {
        setLoading(true)
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
            .finally(() => setLoading(false))
    }

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
                <div className="bg-warning text-center py-3 text-white rounded-3 my-3">
                    <h1>Add Tour Package</h1>
                </div>
                <div className="mt-5 py-5">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="g-2">
                            <Col xs={12} md={6}>
                                <FloatingLabel label="Tour Title">
                                    <Form.Control type="text" placeholder="title" {...register("tourTitle", { required: true })} />
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
                        <div className="d-flex justify-content-center flex-wrap">
                            <div className="me-1">
                                <Form.Control type="submit" value="Add Package" className="bg-warning text-white my-3 py-3 fs-6 fw-bold" style={{ width: '10rem' }} />
                            </div>
                            <div>
                                <Link to='/packages' className="text-decoration-none">
                                    <Form.Control type="button" value="See All" className="bg-warning text-white my-3 py-3 fs-6 fw-bold" style={{ width: '10rem' }} />

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
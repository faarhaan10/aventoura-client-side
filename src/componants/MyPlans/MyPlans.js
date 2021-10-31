import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyPlans = () => {
    const [myPlans, setMyPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    // load data using email query 
    useEffect(() => {
        setLoading(true)
        fetch(`https://aventoura-server.herokuapp.com/tourists?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyPlans(data);
                setLoading(false);
            })

    }, [user.email]);

    // handle delete from db 
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel the tour!?')
        if (proceed) {
            fetch(`https://aventoura-server.herokuapp.com/tourist/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('plan canceled succesfully');
                        const newPlans = myPlans.filter(pack => pack._id !== id);
                        setMyPlans(newPlans);
                    }
                })
        }

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
            <Container className='vh-100'>
                <div className="bg-warning text-center py-3 text-white rounded-3 my-3">
                    <h1>Hello {user.displayName}. Here's Your Tour Plan's</h1>
                </div>
                <div className='h-75 overflow-auto'>
                    {!myPlans.length ? <div className="text-center p-4 border rounded">
                        <h4 className='text-danger'>Please Book Your Plan First</h4>
                        <Link to='/packages'>
                            <Button variant="warning" className="text-white px-4 fw-bold"> Plans
                            </Button>
                        </Link>
                    </div>
                        :
                        <Table striped bordered hover responsive>
                            <thead className=''>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>Plan Title</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Cancellation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myPlans.map(planPackage => <tr style={{ verticalAlign: 'text-top' }}
                                        key={planPackage._id}
                                    >
                                        <td>{myPlans.indexOf(planPackage) + 1}</td>
                                        <td>{planPackage.plan}</td>
                                        <td>{planPackage.location}</td>
                                        <td>{planPackage.date}</td>

                                        <td className='text-center '>
                                            <span className=" px-2 text-white rounded-pill text-uppercase fw-bold" style={planPackage.status === 'pending' ? { backgroundColor: 'gray' } : { backgroundColor: 'lime' }}
                                            >
                                                {planPackage.status}
                                            </span>
                                        </td>
                                        <td className='text-center'>
                                            <Button
                                                variant="outline-danger"
                                                style={{ width: '2.5rem' }}
                                                onClick={() => { handleDelete(planPackage._id) }}
                                            >
                                                <i className="fas fa-times"></i>
                                            </Button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </Table>
                    }
                </div>
            </Container>
        </div>
    );
};

export default MyPlans;
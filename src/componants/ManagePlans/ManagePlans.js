import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManagePlans = () => {
    const [myPlans, setMyPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, setIsLoading } = useAuth();

    // load data from db 
    useEffect(() => {
        setLoading(true)
        fetch('https://aventoura-server.herokuapp.com/tourists')
            .then(res => res.json())
            .then(data => setMyPlans(data))
            .finally(() => setLoading(false))

    }, [user.email]);

    // update status 
    const handleUpdate = (id, status) => {
        if (status !== 'approved') {
            const newStatus = { status: 'approved' };
            setIsLoading(true);
            fetch(`https://aventoura-server.herokuapp.com/tourists/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newStatus)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Approved');
                    }
                })
                .finally(() => setIsLoading(false))
        }
        else {
            alert('Already approved')
        }

    }

    // handle delete operation 
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
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="">
                    <Spinner className="p-5" animation="grow" variant="info" />
                </div>
            </div>
        );
    }
    return (
        <div>
            <Container className='vh-100 pt-5'>
                <div className="bg-warning text-center py-3 text-white rounded-3 my-3">
                    <h1>Hello {user.displayName}. Wellcome to Dashboard</h1>
                </div>
                <div className='h-75 overflow-auto'>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className='text-center'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Plan</th>
                                <th>Location</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Approve/Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myPlans.map(planPackage => <tr style={{ verticalAlign: 'text-top' }}
                                    key={planPackage._id}
                                >
                                    <td>{myPlans.indexOf(planPackage) + 1}</td>
                                    <td>{planPackage.name}</td>
                                    <td>{planPackage.email}</td>
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
                                            style={{ width: '2.5rem' }}
                                            onClick={() => { handleUpdate(planPackage._id, planPackage.status) }}
                                            variant="outline-success" >
                                            <i className="fas fa-check"></i>
                                        </Button>

                                        <Button
                                            style={{ width: '2.5rem' }}
                                            onClick={() => { handleDelete(planPackage._id) }}
                                            className="ms-2"
                                            variant="outline-danger" >
                                            <i className="fas fa-times"></i>
                                        </Button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default ManagePlans;
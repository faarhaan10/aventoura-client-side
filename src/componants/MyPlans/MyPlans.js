import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyPlans = () => {
    const [myPlans, setMyPlans] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://aventoura-server.herokuapp.com/tourists?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyPlans(data))

    }, [user.email]);

    const handleDelete = id => {
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


    return (
        <div>
            <Container>
                <div className="bg-warning text-center py-3 text-white rounded-3 my-3">
                    <h1>Hello {user.displayName}. Here's Your Tour Plan's</h1>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
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
            </Container>
        </div>
    );
};

export default MyPlans;
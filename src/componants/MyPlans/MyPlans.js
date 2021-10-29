import React, { useEffect, useState } from 'react';
import { Container, Table , Button} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyPlans = () => {
    const [myPlans, setMyPlans] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`https://aventoura-server.herokuapp.com/tourists?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyPlans(data))

    },[user.email]);


    return (
        <div>
            <Container>
                <div className="bg-warning text-center py-3 text-white rounded-3 my-3">
                    <h1>Hello {user.displayName}. Here's Your Tour Plan's</h1>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
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
                            myPlans.map(planPackage => <tr style={{verticalAlign: 'text-top'}}
                            key={planPackage._id}
                            >
                                <td>{myPlans.indexOf(planPackage)+1}</td>
                                <td>{planPackage.plan}</td>
                                <td>{planPackage.location}</td>
                                <td>{planPackage.date}</td>
                                <td className='text-center '><span className="bg-secondary  p-2 text-white rounded-pill text-uppercase fw-bold">pending</span></td>
                                <td className='text-center'><Button variant="outline-danger">Danger</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>                    
            </Container>
        </div>
    );
};

export default MyPlans;
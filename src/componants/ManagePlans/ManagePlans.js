import React, { useEffect, useState } from 'react';
import { Container, Table , Button} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManagePlans = () => {
    const [myPlans, setMyPlans] = useState([]);
    const {user,setIsLoading} = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/tourists')
        .then(res => res.json())
        .then(data => setMyPlans(data))

    },[user.email]);

    // update status 
    const handleUpdate = (id,status) => {
        if(status !== 'accepted'){
            const newStatus = {status:'accepted'};
            setIsLoading(true);
            fetch(`http://localhost:5000/tourists/${id}`,{
                method:'PUT',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(newStatus)
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    setIsLoading(false);
                    alert('Accepted');
                }
            })
        }
        else{
            alert('Already accepted')
        }

    }




    const handleDelete = id => {
        fetch(`https://aventoura-server.herokuapp.com/tourist/${id}`,{
            method:'DELETE'
        })
        .then( res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
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
                    <h1>Hello {user.displayName}. Wellcome to Dashboard</h1>
                </div>
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
                        <th>Accept/Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPlans.map(planPackage => <tr style={{verticalAlign: 'text-top'}}
                            key={planPackage._id}
                            >
                                <td>{myPlans.indexOf(planPackage)+1}</td>
                                <td>{planPackage.name}</td>
                                <td>{planPackage.email}</td>
                                <td>{planPackage.plan}</td>
                                <td>{planPackage.location}</td>
                                <td>{planPackage.date}</td>

                                <td className='text-center '>
                                    <span className=" px-2 text-white rounded-pill text-uppercase fw-bold" style={planPackage.status==='pending'?{backgroundColor:'gray'}:{backgroundColor:'lime'}}
                                    >
                                        {planPackage.status}
                                    </span>
                                </td>
                                
                                <td className='text-center'>
                                    <Button onClick={()=>{handleUpdate(planPackage._id,planPackage.status)}} variant="outline-success" ><i className="fas fa-check"></i></Button>

                                    <Button onClick={()=>{handleDelete(planPackage._id)}} className="ms-2" variant="outline-danger" ><i className="fas fa-times"></i></Button>
                                    </td>
                            </tr>)
                        }
                    </tbody>
                </Table>                    
            </Container>
        </div>
    );
};

export default ManagePlans;
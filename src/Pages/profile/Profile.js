import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Profile = () => {

  const user = useSelector((state) => state.userReducer.user);
  
  return (
    <div className='profileuser'>
      <div>
        <Card style={{ width: '500px' }}>
          <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/image-d-avatar-homme-affaires-avec-l-illustration-masculine-de-vecteur-profil-coiffure-barbe-le-m%C3%A2le-178545831.jpg?w=768" />
            <Card.Body>
               <Card.Title>{user && user.name}</Card.Title>
               <Card.Text>{user && user.email}</Card.Text>
               <Card.Text>{user && user.phone}</Card.Text>
            </Card.Body>
        </Card>
      </div>
  </div>
  )
};

export default Profile;
// import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {useNavigate} from "react-router-dom";
// import { deleteEvent } from '../../JS/Actions/ActEvent';
// import {Button, Card} from 'react-bootstrap';

// const EventCard = ({event}) => {
  
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const user = useSelector(state => state.useReducer.user)
  
//   return (

//     <div>
//       <Card style={{ width: '18rem' }}>
//           <Card.Body>
//                 <Card.Img variant="top" src={/>
//                 <Card.Title>{event.name}</Card.Title>
//                 <Card.Text>{event.date}</Card.Text>
//                 <Card.Text>{event.location}</Card.Text>
//                 <Card.Text>{event.hours}</Card.Text>
//                 <Card.Text>{event.description}</Card.Text>
                
//                 {( user && user._id === event.id_user)
//                 ? <Button variant="primary" onClick={() => navigate(`/edit/${event._id}`)}></Button>
//               : null
//               }
//               {( user && user._id === event.id_user)
//               ?
//             <Button variant="primary" onClick={() => dispatch(deleteEvent(event._id))}>Delete</Button>
//               : null}
//           </Card.Body>   
//       </Card>          
//     </div>
//   )
// };

// export default  EventCard ;



import React from 'react'

import {Card, Button} from "react-bootstrap"
import { useDispatch } from 'react-redux';
import {  useNavigate} from 'react-router-dom';
import { deleteEvent } from '../../JS/Actions/ActEvent';

const EventCard = ({event}) => {
   const navigate = useNavigate();
   const dispatch = useDispatch()

  
  return (
    <div>

      event
      <Card style={{ width: '15rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={event.image}/>
        <Card.Title>{event.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
        <Card.Text>{event.location}</Card.Text>
        <Card.Text>{event.hours}</Card.Text>
        <Card.Text>{event.description}</Card.Text>
        <Button onClick={()=> navigate(`/editevent/${event._id}`)} >Edit Event</Button> 
       <Button onClick={()=> dispatch(deleteEvent(event._id))} >delete Event</Button>
        
        {/* <Button variant="success">Edit Event</Button>
        <Button variant="danger">Refuse</Button> */}
      </Card.Body>
    </Card>
    </div>

  )
}

export default EventCard;



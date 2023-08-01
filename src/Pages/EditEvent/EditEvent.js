// import React, { useEffect, useState } from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {useMatch, useNavigate, Link} from "react-router-dom";
// import { editEvent, getEvent } from '../../JS/Actions/ActEvent';
// import {Form, Button} from 'react-bootstrap';



// // Edit Event
// const EditEvent = () => {
//     const dispatch = useDispatch();
//     const [newEvent, setNewEvent] = useState({name:"", date:"", location:"", hours:"", desciption:"", image:""});

//     const eventToGet = useSelector((state) => state.eventReducer.eventToGet);
//    // const load = useSelector((state) => state.eventReducer.load);

//     const match = useMatch("/edit/:id");
//     const navigate = useNavigate();
    
//     // const [file, setFile] = useState(null);

//     const handleChange = (e) => {
//         setNewEvent({...newEvent, [e.target.name]: e.target.value});
//     };

//     useEffect(()=> {
//         dispatch(getEvent(match.params.id));
//       });

//     // const handlePhoto = (e) => { 
//     //   setFile(e.target.files[0]);
//     // };

//     const handleEdit = (e) => {
//       e.preventDefault();
//       let data = new FormData();
//       data.append("name", newEvent.name);
//       data.append("date", newEvent.date);
//       data.append("location", newEvent.location);
//       data.append("hours", newEvent.hours);
//       data.append("description", newEvent.desciption);
//       // data.append("image", file);

//       dispatch(editEvent(match.params.id, newEvent));
//       navigate(-1);
//     };

//   return (
//     <div className='editevent'>
//       <h1>Edit event</h1>
//           <Form.Label>Name</Form.Label>
//             <Form.Control type="text" placeholder={`${eventToGet.name}`} name="name" value={newEvent.name} onChange={handleChange} />
//           <Form.Label>Date</Form.Label>
//             <Form.Control type="date" placeholder={`${eventToGet.date}`} name="date" value={newEvent.date} onChange={handleChange} />
//           <Form.Label>Location</Form.Label>
//             <Form.Control type="text" placeholder={`${eventToGet.location}`} name="location" value={newEvent.location} onChange={handleChange} />
//           <Form.Label>Hours</Form.Label>
//             <Form.Control type="text" placeholder={`${eventToGet.hours}`} name="hours" value={newEvent.hours} onChange={handleChange} />
//           <Form.Label>Description</Form.Label>
//             <Form.Control type="text" placeholder={`${eventToGet.desciption}`} name="description" value={newEvent.desciption} onChange={handleChange} /> 
//           {/* <input type='file' id='file-input' encType="multipart/form-data" onChange={handlePhoto} />  */}
//           <br/>
//           <br/>  
//           <Link to='/'><Button className='btn-edit' variant="primary" type="submit" onClick={handleEdit}>Edit Event</Button></Link>
//     </div>
//   );
// };

// export default EditEvent;

import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch, useNavigate} from 'react-router-dom';

import { editEvent, getEvent } from '../../JS/Actions/ActEvent';


const EditEvent = () => {
    const dispatch = useDispatch();
    const [newEvent, setNewEvent] = useState({name:"", date:"", location:"", hours:"", desciption:""});
    const eventToGet = useSelector(state => state.eventReducer.eventToGet)
    const match = useMatch("/editevent/:id");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setNewEvent({...newEvent, [e.target.name]: e.target.value});
    }
    useEffect(() => {
        dispatch(getEvent(match.params.id))
    })
    const handleEdit = () => {
        dispatch(editEvent(match.params.id, newEvent));
        navigate(-1);
    }
    return (
        <div className='edit'>
            <h1>Edit event</h1>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={`${eventToGet.name}`} name="name" value={newEvent.name} onChange={handleChange} />
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder={`${eventToGet.email}`} name="date" value={newEvent.date} onChange={handleChange} />
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder={`${eventToGet.location}`} name="location" value={newEvent.location} onChange={handleChange} />
            <Form.Label>Hours</Form.Label>
            <Form.Control type="text" placeholder={`${eventToGet.hours}`} name="hours" value={newEvent.hours} onChange={handleChange} />
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder={`${eventToGet.desciption}`} name="description" value={newEvent.description} onChange={handleChange} />
            <Link to='/'><Button className='btn-edit' variant="primary" type="submit" onClick={handleEdit}>Edit Event</Button></Link>
        </div>
    )
};

export default EditEvent;
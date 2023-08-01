import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { addEvent } from '../../JS/Actions/ActEvent';
// import {Helmet} from "react-helmet";
import { TextField, Button, CircularProgress } from "@mui/material";

const AddEvent = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    
    const load = useSelector((state) => state.eventReducer.load);

    const [newEvent, setEvent] = useState({});
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setEvent({...newEvent , [e.target.name] : e.target.value })
      };

    const handlePhoto = (e)=> {
        setFile(e.target.files[0])
    };

    const handleAdd = (e) => {
        e.preventDefault();
        let data = new FormData()
        data.append("name", newEvent.name);
        data.append("date", newEvent.date);
        data.append("location", newEvent.location);
        data.append("hours", newEvent.hours);
        data.append("description", newEvent.description);
        data.append("image", file)
        dispatch(addEvent(newEvent))
    };

      return (
    <div>
         {/* <Helmet>
          <meta charSet="utf-8" />
          <title>Add Event</title>
          <link rel="canonical" />
          <meta
          name="description"
          content="add Event"
          />
      </Helmet> */}
    <h1>Add Event</h1>

    <TextField id="standard-basic" label="Name" variant="standard"  onChange={handleChange} type="text" name="name" />
      <br/>
    <TextField id="standard-basic" label="Date" variant="standard"  onChange={handleChange} type="text" name="date" />  
     <br/>
    <TextField id="standard-basic" label="location" variant="standard"  onChange={handleChange} type="text" name="location" />
    <br/>
    <TextField id="standard-basic" label="hours" variant="standard"  onChange={handleChange} type="text" name="hours" />
    <br/>
    <TextField id="standard-basic" label="Description" variant="standard"  onChange={handleChange} type="text" name="description" />
    <br/>
    <input type="file" id="file-input" encType="multipart/form-data" onChange={handlePhoto} name='image' />
    <br/>
    <br/>

    {load ? 
        <Button variant="contained" color="success" onClick={handleAdd} >
        <CircularProgress size="1.25rem" sx={{ color: "green" }} />
        ADD EVENT
        </Button> 
        :

        <Button variant="contained" color="success" onClick={handleAdd} >
        ADD EVENT
        </Button>
      }

    </div>
  )
};

export default AddEvent;
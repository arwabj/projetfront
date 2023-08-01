
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import { login } from '../../JS/Actions/ActUsers';
import Notification from '../../Components/Notification/Notification';

const Login = () => {
  
    const [user, setUser] = useState({})
    const errors = useSelector((state) => state.userReducer.errors);
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value})
    };

    const handleUser = (e) => {
      e.preventDefault();
      dispatch(login(user))
      navigate('/')
    };
  

  return (
    <div className='loginuser'>
      <h1> Login User</h1>
      {errors && errors.map((el)=> <Notification error={el} />)}

      <Form.Label> Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Enter password" name="password" onChange={handleChange} />
            <Button className='btn-login' variant="primary" type="submit" onClick={handleUser}>Login</Button>
     
      </div>
  )
};


export default Login;
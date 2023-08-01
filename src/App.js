import React, { useEffect } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/login/Login';
import Profile from './Pages/profile/Profile';
import Error from './Pages/Errors/Error';
import NavBar from './Components/NavBar/NavBar';
import Foooter from './Components/Footer/Foooter';
import { useDispatch } from 'react-redux';
import { current } from './JS/Actions/ActUsers';
import AddEvent from './Pages/AddEvent/AddEvent'
import EditEvent from './Pages/EditEvent/EditEvent';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  },[dispatch]);
  return (
    <div className="App">
    <h1> hello </h1>
    <NavBar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/register' element={<Register/>}/> 
       <Route path='/login' element={<Login/>}/> 
       <Route path='/addevent' element={<AddEvent />}/> 
       <Route path='/editevent/:id' element={<EditEvent />}/> 
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/*' element={<Error/>}/>
    </Routes>
    <Foooter/>
    </div>
  );
};

export default App;

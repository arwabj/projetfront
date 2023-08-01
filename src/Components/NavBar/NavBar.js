import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../../JS/Actions/ActUsers';
import { useDispatch, useSelector } from 'react-redux';


const NavBar = () => {

  const isAuth= useSelector(state=> state.userReducer.isAuth);
  const dispatch = useDispatch();

  return (
    <header>
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">EVENT.TN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/addevent">Add Event</Nav.Link> 
            { isAuth ? <Nav.Link href="/profile">Profile</Nav.Link> : null}
          </Nav>
          { isAuth ?
        (<Link to='/'><button className='logout' onClick={()=> dispatch(logout())}>Logout</button></Link>)  
                   :
                   (
                    <div className='login'>
                      <Link to='/login'><button>Login</button></Link>
                      <Link to='/register'><button>Register</button></Link>
                    </div>
                   )
        }
        </Container>
      </Navbar>
    </header>
  )
};

export default NavBar;


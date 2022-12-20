import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {/* menu */}

            {/* <Link to="/">Home</Link>
            <Link to="/todo">Todo</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/login">Login</Link> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/logout">Logout</NavLink>
            <NavLink to="/login">Login</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

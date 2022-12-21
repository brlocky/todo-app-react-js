import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from '../../provider/AuthProvider';
import { NavLink, Navigate, useOutlet } from 'react-router-dom';

const ProtectedLayout = () => {
  const { isAuth } = useAuth();
  const outlet = useOutlet();

  if (!isAuth()) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Todo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              {/* menu */}
              <NavLink to="/">Home</NavLink>
              <NavLink to="/todo">Todo</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{outlet}</Container>
    </>
  );
};

export default ProtectedLayout;

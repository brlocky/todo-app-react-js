import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
          <Nav.Link>Todo App</Nav.Link>
        </Navbar.Brand>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

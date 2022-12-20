import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export interface LoginFormProps {
  onSubmit: (data: LoginProps) => void;
}

export interface LoginProps {
  email: string;
  password: string;
}

const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState('email@gmail.com');
  const [password, setPassword] = useState('password');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    props.onSubmit({ email, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;

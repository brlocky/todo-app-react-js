import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

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
  const [passwordError, setpasswordError] = useState('');
  const [emailError, setemailError] = useState('');

  const handleValidation = (event: React.FormEvent) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError('Email Not Valid');
    } else {
      setemailError('');
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError('Only Letters and length must best min 8 Chracters and Max 22 Chracters');
    } else {
      setpasswordError('');
    }

    return formIsValid;
  };

  const loginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidation(e)) {
      props.onSubmit({ email, password });
    }
  };

  return (
    <Form onSubmit={loginSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <small id="emailHelp" className="text-danger form-text">
          {emailError}
        </small>
        <Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <small id="passworderror" className="text-danger form-text">
          {passwordError}
        </small>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default LoginForm;

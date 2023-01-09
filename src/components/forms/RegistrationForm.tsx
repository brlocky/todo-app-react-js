import React, { useState } from 'react';
import { classNames } from '../../utils/helpers';

export interface RegistrationFormProps {
  onSubmit: (data: RegistrationProps) => void;
  errorMessage: string;
}

export interface RegistrationProps {
  username: string;
  email: string;
  password: string;
}

const RegistrationForm = (props: RegistrationFormProps) => {
  const [username, setUsername] = useState('Username');
  const [email, setEmail] = useState('email@gmail.com');
  const [password, setPassword] = useState('password');
  const [passwordConfirmation, setPasswordConfirmation] = useState('password');
  const [errorPassword, setErrorPassword] = useState(false);

  const validateForm = () => {
    if (password !== passwordConfirmation) {
      setErrorPassword(true);
      return false;
    }

    return true;
  };
  const registrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      props.onSubmit({ username, email, password });
    }
  };

  return (
    <>
      <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={registrationSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={classNames(
                errorPassword ? 'border-1 border-rose-500' : '',
                'relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              )}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passwordConfirmation" className="sr-only">
              Password
            </label>
            <input
              id="passwordConfirmation"
              name="password-confirmation"
              type="password"
              autoComplete="current-password-confirmation"
              required
              className={classNames(
                errorPassword ? 'border-1 border-rose-500' : '',
                'relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              )}
              placeholder="Password confirmation"
              value={passwordConfirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </div>
        </div>

        {errorPassword && (
          <div>
            <p className="text-rose-600 dark:text-rose-500 text-sm">Passwords are not matching</p>
          </div>
        )}

        {props.errorMessage && (
          <div>
            <p className="text-red-500 text-xs italic">{props.errorMessage}</p>
          </div>
        )}

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
export default RegistrationForm;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import Alert from '../Alert/Alert';

import { onLoginUser, resetErrorMsg } from './../../redux/user/actions';

import './SignIn.scss';

const SignIn = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userInfo = useSelector(state => state.user);
  const { loggedInUser, error, loading } = userInfo;
  const redirectPage = location.search ? location.search.split('=')[1] : '';

  useEffect(() => {
    if(loggedInUser) {
      setUserEmail('');
      setUserPassword('');
      navigate(`/${redirectPage}`);
    }
  }, [ loggedInUser, navigate, redirectPage ]);

  useEffect(() => {
    if (error) {
      setUserPassword('');
    }
  }, [error]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(onLoginUser({
      email: userEmail,
      password: userPassword
    }));
  }

  const clearError = () => {
    dispatch(resetErrorMsg());
  };

  return (
    <div className='signin'>
      <h2>School Coordinator Login</h2>
      {error && <Alert type='error' message={error} closeFn={() => clearError()} /> }
      <form onSubmit={loginHandler}>
        <div>
          <input
            type='email'
            placeholder='Enter Email'
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Enter Password'
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
          />
        </div>
        {loading ? <Spinner /> : (
          <Button
            variant='bg'
            type='submit'
            disabled={userEmail.length === 0 || userPassword.length === 0}>
            Login
          </Button>
        )}
      </form>
    </div>
  );
};

export default SignIn;
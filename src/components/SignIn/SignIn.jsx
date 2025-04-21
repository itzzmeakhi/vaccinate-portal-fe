import React, { useState } from 'react';
import Button from '../Button/Button';

import './SignIn.scss';

const SignIn = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <div className='signin'>
      <h2>School Coordinator Login</h2>
      <form>
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
          <Button
            variant='bg'>
            Login
          </Button>
        </form>
    </div>
  );
};

export default SignIn;
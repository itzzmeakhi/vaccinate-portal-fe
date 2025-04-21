import React from 'react';

import Template from '../Template/Template';
import SignIn from './../../components/SignIn/SignIn';

import './AuthPage.scss';

const AuthPage = () => {
  return (
    <Template>
      <div className='auth-page'>
        <SignIn />
      </div>
    </Template>
  );
};

export default AuthPage;
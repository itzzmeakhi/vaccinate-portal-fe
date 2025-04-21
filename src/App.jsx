import React from 'react';

import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <HomePage />
      <AuthPage />
    </div>
  );
};

export default App;

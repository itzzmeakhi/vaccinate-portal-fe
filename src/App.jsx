import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import StudentsPage from './pages/StudentsPage/StudentsPage';
import Dashboard from './pages/Dashboard/Dashboard';
import StatusPage from './pages/StatusPage/StatusPage';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import ReportsPage from './pages/ReportsPage/ReportsPage';

import './App.scss';

const App = () => {
  const userInfo = useSelector(state => state.user);
  const { loggedInUser } = userInfo;
  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={loggedInUser ? <Navigate to='/dashboard' /> : <AuthPage />} />
        <Route path='/dashboard' element={loggedInUser ? <Dashboard /> : <Navigate to='/login' />} />
        <Route path='/students' element={loggedInUser ? <StudentsPage /> : <Navigate to='/login' />} />
        <Route path='/status' element={loggedInUser ? <StatusPage /> : <Navigate to='/login' />} />
        <Route path='/reports' element={loggedInUser ? <ReportsPage /> : <Navigate to='/login' />} />
        <Route path='/' element={loggedInUser ? <Navigate to='/dashboard' /> : <HomePage /> }/>
        <Route path='*' element={<ComingSoon />} />
     </Routes>
    </div>
  );
};

export default App;

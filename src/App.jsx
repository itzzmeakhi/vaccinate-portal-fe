import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={<AuthPage />} />
        <Route path='/' element={<HomePage />} />
        {/* <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/students" element={isAuthenticated ? <StudentsPage /> : <Navigate to="/login" />} />
        <Route path="/reports" element={isAuthenticated ? <ReportsPage /> : <Navigate to="/login" />} />
        <Route path="/drives" element={isAuthenticated ? <VaccinationDrivesPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} /> */}
     </Routes>
    </div>
  );
};

export default App;

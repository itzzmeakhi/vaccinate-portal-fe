import React, { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';

import Template from '../Template/Template';
import Button from '../../components/Button/Button';

import {
  getMetrics
} from './../../redux/metrics/actions';

import './Dashboard.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  const metrics = useSelector(state => state.metrics);

  useEffect(() => {
    dispatch(getMetrics());
  }, [ dispatch ]);
  return (
    <Template>
      <div className='dashboard'>
        <div className='dashboard-metrics'>
          <h2>Dashboard Metrics</h2>
          <p>Total Students: {metrics.totalStudents}</p>
          <p>Vaccinated Students: {metrics.vaccinatedStudents}</p>
          <p>Vaccination Rate: {metrics.vaccinatedPercentage}%</p>
        </div>
        <div className='dashboard-upcoming'>
          <h2>Upcoming Vaccination Drives</h2>
          {metrics.upcomingDrives.length > 0 ? (
            <ul>
              {metrics.upcomingDrives.map((drive) => (
                <li key={drive._id}>
                  {drive.name} - {new Date(drive.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming drives in the next 30 days.</p>
          )}
        </div>
      </div>
    </Template>
  );
};

export default Dashboard;

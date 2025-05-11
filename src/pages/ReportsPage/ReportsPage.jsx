import React from 'react';

import Template from '../Template/Template';
import StudentList from '../../components/StudentList/StudentList';

import './ReportsPage.scss';

const ReportsPage = () => {
  return (
    <Template>
      <div className="reports-page">
        <StudentList />
      </div>
    </Template>
  );
};

export default ReportsPage;
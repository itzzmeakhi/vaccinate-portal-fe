import React from 'react';

import Template from '../Template/Template';
import StudentForm from './../../components/StudentForm/StudentForm';
import BulkUpload from './../../components/BulkUpload/BulkUpload';

const StudentsPage = () => {
  return (
    <Template>
      <div className="students-page">
        <StudentForm />
        <BulkUpload />
      </div>
    </Template>
  );
};

export default StudentsPage;

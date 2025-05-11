import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button/Button';
import Alert from '../Alert/Alert';
import Spinner from '../Spinner/Spinner';

import {
  onBulkAddStudents,
  resetBulkStudentErrMsg,
  resetBulkStudentSuccessMsg
} from './../../redux/student/actions';

import './BulkUpload.scss';

const BulkUpload = () => {
  const [file, setFile] = useState('');
  const dispatch = useDispatch();
  const bulkStudentAdd = useSelector(state => state.student.bulkStudentAdd);
  const { loading, error, successMsg } = bulkStudentAdd;

  const handleUploadFile = (e) => {
    e.preventDefault();
    dispatch(onBulkAddStudents({
      file
    }));
    setFile('');
  };

  return (
    <div className='bulk-upload'>
      <div className='border'>
        <h3> Bulk upload Student Data (CSV file) </h3>
        {successMsg && <Alert type='success' message={successMsg} closeFn={() => dispatch(resetBulkStudentSuccessMsg())} /> }
        {error && <Alert type='error' message={error} closeFn={() => dispatch(resetBulkStudentErrMsg())} /> }
        <form onSubmit={handleUploadFile}>
          <input 
            type='file'
            accept='.csv'
            onChange={(e) => setFile(e.target.files[0])}
          />
          {loading ? <Spinner /> : (
            <Button
              variant='bg'
              type='submit'
              disabled={!file}>
              Upload
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default BulkUpload;
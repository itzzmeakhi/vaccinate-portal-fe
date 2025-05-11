import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import Alert from '../Alert/Alert';
import Spinner from '../Spinner/Spinner';

import { 
  onAddStudent,
  resetSingleStudentErrMsg,
  resetSingleStudentSuccessMsg
} from './../../redux/student/actions';

import './StudentForm.scss';

const StudentForm = () => {

  const classOptions = [
    { _id: '1', label: "Class 1" },
    { _id: '2', label: "Class 2" },
    { _id: '3', label: "Class 3" },
    { _id: '4', label: "Class 4" },
    { _id: '5', label: "Class 5" },
    { _id: '6', label: "Class 6" },
    { _id: '7', label: "Class 7" },
    { _id: '8', label: "Class 8" },
    { _id: '9', label: "Class 9" },
    { _id: '10', label: "Class 10" }
  ];

  const [regNo, setRegNo] = useState('');
  const [name, setName] = useState('');
  const [standard, setStandard] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentContactNum, setParentContactNum] = useState('');
  const [dob, setDob] = useState('');

  const dispatch = useDispatch();
  const submitDisabled = regNo.length === 0 || name.length === 0 || standard === 0 || parentName.length === 0 || parentContactNum.length === 0;

  const singleStudentAdd = useSelector(state => state.student.singleStudentAdd);
  const { loading, error, successMsg } = singleStudentAdd;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onAddStudent({
      regNo,
      name,
      standard,
      parentName,
      parentContactNum,
      dob
    }));
    setRegNo('');
    setName('');
    setStandard('');
    setParentName('');
    setParentContactNum('');
    setDob('');
  };

  return (
    <div className='student-form'>
      <div className='border'>
        <h2>Add Individual Student</h2>
        <p><i>All fields are mandatory</i></p>
        {successMsg && <Alert type='success' message={successMsg} closeFn={() => dispatch(resetSingleStudentSuccessMsg())} /> }
        {error && <Alert type='error' message={error} closeFn={() => dispatch(resetSingleStudentErrMsg())} /> }
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              placeholder='Registration Number'
              value={regNo}
              onChange={(event) => setRegNo(event.target.value)}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <Dropdown
            options={classOptions}
            label='Select Standard'
            value={standard}
            setSelectedOption={setStandard}
          />
          <div className='dob'>
            <label htmlFor="dob">
              DOB
            </label>
            <input 
              type="date" 
              id="dob" 
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)} />
          </div>
          <div>
            <input
              type='text'
              placeholder='Parent Name'
              value={parentName}
              onChange={(event) => setParentName(event.target.value)}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Parent Contact No'
              value={parentContactNum}
              onChange={(event) => setParentContactNum(event.target.value)}
            />
          </div>
          {loading ? <Spinner /> : (
            <Button
              variant='bg'
              type='submit'
              disabled={submitDisabled}>
              Add Student
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default StudentForm;

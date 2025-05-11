import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import Dropdown from '../Dropdown/Dropdown';
import Alert from '../Alert/Alert';

import {
  fetchVaccines
} from './../../redux/vaccine/actions';
import {
  onCreateDrive,
  resetCreateErrorMsg,
  resetCreateSuccessMsg,
  fetchDriveById,
  updateDriveById
} from './../../redux/drives/actions';

import './DriveForm.scss';

const DriveForm = ({ editMode = false, driveId = '', exitEditMode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVaccines());
  }, [ dispatch ]);

  useEffect(() => {
    if (editMode) {
      dispatch(fetchDriveById(driveId));
    }
  }, [ driveId, dispatch, editMode ]);

  const vaccineList = useSelector(state => state.vaccine.vaccines);

  const createDrive = useSelector(state => state.drives.createDrive);
  const drive = useSelector(state => state.drives.drive);

  const { error, loading, successMsg } = createDrive;
  const { driveDetails } = drive;

  const [name, setName] = useState('');
  const [vaccine, setVaccine] = useState('');
  const [date, setDate] = useState('');
  const [numOfDoses, setNumOfDoses] = useState('');
  const [applicableClasses, setApplicableClasses] = useState('');

  const createDriveHandler = (e) => {
    e.preventDefault();
    if (!editMode) {
      dispatch(onCreateDrive({
        name: name,
        vaccine: vaccine,
        date: date,
        numDoses: numOfDoses,
        applicableClasses: applicableClasses.replaceAll(' ', '')
      }));
    } else {
      dispatch(updateDriveById({
        name: name,
        vaccine: vaccine,
        date: date,
        numDoses: numOfDoses,
        applicableClasses: applicableClasses.replaceAll(' ', ''),
        id: driveId
      }));
      exitEditMode();
    }
    setName('');
    setVaccine('');
    setDate('');
    setNumOfDoses('');
    setApplicableClasses('');
  }

  useEffect(() => {
    if (editMode && driveDetails) {
      setName(driveDetails.name || '');
      setVaccine(driveDetails.vaccine || '');
      setDate(driveDetails.date ? driveDetails.date.split('T')[0] : '');
      setNumOfDoses(driveDetails.numDoses || '');
      setApplicableClasses(driveDetails.applicableClasses || '');
    }
  }, [editMode, driveDetails]);

  return (
    <div className='drive-form'>
      <div className='border'>
        <h3>{editMode ? 'Update Drive' : 'Create Drive'}</h3>
        {successMsg && <Alert type='success' message={successMsg} closeFn={() => dispatch(resetCreateSuccessMsg())} /> }
        {error && <Alert type='error' message={error} closeFn={() => dispatch(resetCreateErrorMsg())} /> }
        <form onSubmit={createDriveHandler}>
          <div>
            <input
              type='text'
              placeholder='Drive name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <Dropdown
            options={vaccineList}
            label='Select Vaccine'
            value={vaccine}
            setSelectedOption={setVaccine}
          />
          <div className='date'>
            <label htmlFor="sdate">
              Schheduled Date
            </label>
            <input
              type='date'
              id="sdate"
              name="sdate"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div>
            <input
              type='number'
              placeholder='Number of Doses available'
              value={numOfDoses}
              onChange={(event) => setNumOfDoses(event.target.value)}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Applicable classes (Comma seperated)'
              value={applicableClasses}
              onChange={(event) => setApplicableClasses(event.target.value)}
            />
          </div>
          {loading ? <Spinner /> : (
            <Button
              variant='bg'
              type='submit'>
              {editMode ? 'Update' : 'Create'}
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default DriveForm;
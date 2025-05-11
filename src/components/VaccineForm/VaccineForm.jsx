import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import Alert from '../Alert/Alert';

import { 
  onAddVaccine,
  resetErrorMsg,
  resetSuccessMsg
} from './../../redux/vaccine/actions';

import './VaccineForm.scss';

const VaccineForm = () => {
  const [name, setName] = useState('');
  const [manfacturer, setManfacturer] = useState('');
  const vaccineState = useSelector(state => state.vaccine);
  const { loading, error, successMsg } = vaccineState;
  const dispatch = useDispatch();

  const addVaccineHandler = (e) => {
    e.preventDefault();
    dispatch(onAddVaccine({
      name: name,
      manfacturer: manfacturer
    }));
    setName('');
    setManfacturer('');
  };

  return (
    <div className='vaccine-form'>
      <div className='border'>
        <h3>Add Vaccine</h3>
        {successMsg && <Alert type='success' message={successMsg} closeFn={() => dispatch(resetSuccessMsg())} /> }
        {error && <Alert type='error' message={error} closeFn={() => dispatch(resetErrorMsg())} /> }
        <form onSubmit={addVaccineHandler}>
          <div>
            <input
              type='text'
              placeholder='Enter Vaccine Name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Enter Manfacturer'
              value={manfacturer}
              onChange={(event) => setManfacturer(event.target.value)}
            />
          </div>
          {loading ? <Spinner /> : (
            <Button
              variant='bg'
              type='submit'>
              Add Vaccine
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default VaccineForm;
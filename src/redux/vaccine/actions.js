import axios from 'axios';

import {
  addVaccineStart,
  addVaccineSuccess,
  addVaccineFail,
  fetchVaccinesStart,
  fetchVaccinesSuccess,
  fetchVaccinesFail,
  resetErrorMessage,
  resetSuccessMessage
} from './reducers';

const onAddVaccine = ({ name, manfacturer }) => async (dispatch, getState) => {
  try {
    dispatch(addVaccineStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      }
    };
    const { data } = await axios.post(
      '/api/vaccine', 
      { name, manfacturer }, 
      config
    );

    dispatch(addVaccineSuccess(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';
    dispatch(addVaccineFail(errMsg));
  }
};

const fetchVaccines = () => async (dispatch, getState) => {
  try {
    dispatch(fetchVaccinesStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      }
    };
    const { data } = await axios.get('/api/vaccine', config);
    dispatch(fetchVaccinesSuccess(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';
    dispatch(fetchVaccinesFail(errMsg));
  }
};

const resetErrorMsg = () => (dispatch) => {
  try {
    dispatch(resetErrorMessage());
  } catch(err) {
    console.err(err);
  }
};

const resetSuccessMsg = () => (dispatch) => {
  try {
    dispatch(resetSuccessMessage());
  } catch(err) {
    console.err(err);
  }
};

export { 
  onAddVaccine,
  fetchVaccines,
  resetErrorMsg,
  resetSuccessMsg
};
import axios from 'axios';

import {
  createDriveStart,
  createDriveSuccess,
  createDriveFail,
  resetCreateErrorMessage,
  resetCreateSuccessMessage,
  fetchDriveStatusStart,
  fetchDriveStatusSuccess,
  fetchDriveStatusFail,
  vaccinateStart,
  vaccinateSuccess,
  vaccinateFail,
  fetchDriveStart,
  fetchDriveSuccess,
  fetchDriveFail,
  updateDriveStart,
  updateDriveFail,
  updateDriveSuccess,
  resetFetchDriveStatusMsg,
  resetVaccinateStatusMsg
} from './reducers';

const onCreateDrive = ({ name, vaccine, date, applicableClasses, numDoses }) => async (dispatch, getState) => {
  try {
    dispatch(createDriveStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      }
    };
    const { data } = await axios.post(
      '/api/drive', 
      { name, vaccine, date, applicableClasses, numDoses }, 
      config
    );

    dispatch(createDriveSuccess(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';
    dispatch(createDriveFail(errMsg));
  }
};

const resetCreateErrorMsg = () => (dispatch) => {
  try {
    dispatch(resetCreateErrorMessage());
  } catch(err) {
    console.err(err);
  }
};

const resetCreateSuccessMsg = () => (dispatch) => {
  try {
    dispatch(resetCreateSuccessMessage());
  } catch(err) {
    console.err(err);
  }
};

const fetchDriveStatus = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDriveStatusStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      }
    };
    const { data } = await axios.get('/api/drive/status', config);
    dispatch(fetchDriveStatusSuccess(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';

    dispatch(fetchDriveStatusFail(errMsg));
  }
};

const onVaccinate = ({ driveId, studentId }) => async (dispatch, getState) => {
  try {
    dispatch(vaccinateStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      }
    };
    const { data } = await axios.patch('/api/drive/vaccinate',
      { studentId, driveId },
      config
    );
    dispatch(vaccinateSuccess(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';

    dispatch(vaccinateFail(errMsg));
  }
};

const fetchDriveById = (driveId) => async (dispatch, getState) => {
  try {
    dispatch(fetchDriveStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      }
    };
    const { data } = await axios.get(`/api/drive/${driveId}`, config);
    dispatch(fetchDriveSuccess(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';

    dispatch(fetchDriveFail(errMsg));
  }
};

const updateDriveById = (drive) => async (dispatch, getState) => {
  try {
    dispatch(updateDriveStart());
    const { id, name, vaccine, date, applicableClasses, numDoses } = drive;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      }
    };
    const { data } = await axios.put(
      `/api/drive/${id}`, 
      { name, vaccine, date, applicableClasses, numDoses },
      config
    );
    dispatch(updateDriveSuccess(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';

    dispatch(updateDriveFail(errMsg));
  }
};

const resetVaccinateStatusMessage = () => (dispatch) => {
  try {
    dispatch(resetVaccinateStatusMsg());
  } catch(err) {
    console.err(err);
  }
};

const resetFetchDriveStatusMessage = () => (dispatch) => {
  try {
    dispatch(resetFetchDriveStatusMsg());
  } catch(err) {
    console.err(err);
  }
};

export { 
  onCreateDrive,
  fetchDriveStatus,
  onVaccinate,
  resetCreateErrorMsg,
  resetCreateSuccessMsg,
  fetchDriveById,
  updateDriveById,
  resetVaccinateStatusMessage,
  resetFetchDriveStatusMessage
};
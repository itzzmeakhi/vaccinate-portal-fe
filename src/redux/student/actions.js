import axios from 'axios';

import {
  singleStudentAddStart,
  singleStudentAddSuccess,
  singleStudentAddFail,
  bulkAddStudentsStart,
  bulkAddStudentsSuccess,
  bulkAddStudentsFail,
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFail,
  resetSingleStudentSuccessMessage,
  resetSingleStudentErrorMessage,
  resetBulkStudentSuccessMessage,
  resetBulkStudentErrorMessage,
  resetFetchStudentsMsg
} from './reducers';

const onAddStudent = (props) => async (dispatch, getState) => {
  try {
    const {
      regNo,
      name,
      standard,
      parentName,
      parentContactNum,
      dob
    } = props;
    dispatch(singleStudentAddStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      }
    };
    const { data } = await axios.post(
      '/api/students', 
      {
        regNo,
        name,
        standard,
        parentName,
        parentContactNum,
        dob
      }, 
      config
    );
    dispatch(singleStudentAddSuccess(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';
    dispatch(singleStudentAddFail(errMsg));
  }
};

const onBulkAddStudents = (props) => async (dispatch, getState) => {
  try {
    const {
      file
    } = props;
    dispatch(bulkAddStudentsStart());
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      }
    }
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await axios.post(
      '/api/students/bulkupload',
      formData, 
      config
    );
    dispatch(bulkAddStudentsSuccess(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';
    dispatch(bulkAddStudentsFail(errMsg));
  }
};

const fetchStudents = (searchParams) => async (dispatch, getState) => {
  try {
    dispatch(fetchStudentsStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      },
      params: {
        name: searchParams.name || undefined,
        standard: searchParams.standard || undefined,
        regNo: searchParams.regNo || undefined,
        vaccinated: searchParams.vaccinated || undefined,
        vaccine: searchParams.vaccine || undefined
      }
    };
    const { data } = await axios.get('/api/students', config);
    dispatch(fetchStudentsSuccess(data));
  } catch (err) {
    const msg = err.message;
    dispatch(fetchStudentsFail(msg));
  }
};

const resetSingleStudentSuccessMsg = () => (dispatch) => {
    try {
      dispatch(resetSingleStudentSuccessMessage());
    } catch(err) {
      console.log(err);
    }
};

const resetSingleStudentErrMsg = () => (dispatch) => {
    try {
      dispatch(resetSingleStudentErrorMessage());
    } catch(err) {
      console.log(err);
    }
};

const resetBulkStudentSuccessMsg = () => (dispatch) => {
  try {
    dispatch(resetBulkStudentSuccessMessage());
  } catch(err) {
    console.log(err);
  }
};

const resetBulkStudentErrMsg = () => (dispatch) => {
  try {
    dispatch(resetBulkStudentErrorMessage());
  } catch(err) {
    console.log(err);
  }
};

const resetFetchStudentsMessage = () => (dispatch) => {
  try {
    dispatch(resetFetchStudentsMsg());
  } catch(err) {
    console.log(err);
  }
};

export { 
  onAddStudent,
  onBulkAddStudents,
  fetchStudents,
  resetSingleStudentSuccessMsg,
  resetSingleStudentErrMsg,
  resetBulkStudentSuccessMsg,
  resetBulkStudentErrMsg,
  resetFetchStudentsMessage
};
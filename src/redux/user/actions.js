import axios from 'axios';

import {
  loginUserStart,
  loginUserSuccess,
  loginUserFail,
  resetErrorMessage,
  logoutUser
} from './reducers';

const onLoginUser = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(loginUserStart());
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.post(
      '/api/users/login', 
      { email, password }, 
      config
    );

    dispatch(loginUserSuccess(data));

    localStorage.setItem('loggedInUser', JSON.stringify(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';
    dispatch(loginUserFail(errMsg));
  }
};

const resetErrorMsg = () => (dispatch) => {
  try {
    dispatch(resetErrorMessage());
  } catch(err) {
    console.err(err);
  }
};

const onLogoutUser = () => (dispatch) => {
  try {
    localStorage.removeItem('loggedInUser');
    dispatch(logoutUser());
  } catch(err) {
    console.err(err);
  }
};

export { 
  onLoginUser,
  onLogoutUser,
  resetErrorMsg
};
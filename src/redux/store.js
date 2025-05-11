import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import userReducer from './user/reducers';
import studentReducer from './student/reducers';
import vaccineReducer from './vaccine/reducers';
import drivesReducer from './drives/reducers';
import metricsReducer from './metrics/reducers';

const userDataFromStorage = localStorage.getItem('loggedInUser') ? JSON.parse(localStorage.getItem('loggedInUser')) : null;

const initialState = {
  user: {
    loggedInUser: userDataFromStorage
  }
};

const store = configureStore({
  reducer: {
    user: userReducer,
    student: studentReducer,
    vaccine: vaccineReducer,
    drives: drivesReducer,
    metrics: metricsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk }),
  preloadedState: initialState
});

export default store;
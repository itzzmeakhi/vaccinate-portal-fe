import axios from 'axios';

import {
  getMetricsStart,
  getMetricsSuccess,
  getMetricsFail
} from './reducers';

const getMetrics = () => async (dispatch, getState) => {
  try {
    dispatch(getMetricsStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().user.loggedInUser.token}`
      }
    };

    const { data } = await axios.get('/api/dashboard/metrics', config);
    dispatch(getMetricsSuccess(data));
  } catch(err) {
    const errMsg = err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err?.message : 'An Unexpected error occurred. Please try again';
    dispatch(getMetricsFail(errMsg));
  }
};

export { 
  getMetrics
};
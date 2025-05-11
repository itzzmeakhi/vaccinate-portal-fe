import { createSlice } from '@reduxjs/toolkit';

const metricsSlice = createSlice({
  name: 'metrics',
  initialState: {
    totalStudents: '',
    vaccinatedStudents: '',
    vaccinatedPercentage: '',
    upcomingDrives: [],
    loading: false,
    error: null,
  },
  reducers: {
    getMetricsStart(state) {
      state.loading = true;
    },
    getMetricsSuccess(state, action) {
      state.loading = false;
      state.totalStudents = action.payload.totalStudents;
      state.vaccinatedStudents = action.payload.vaccinatedStudents;
      state.vaccinatedPercentage = action.payload.vaccinatedPercentage;
      state.upcomingDrives = action.payload.upcomingDrives;
    },
    getMetricsFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetErrorMessage(state) {
      state.error = null;
    }
  }
});


export default metricsSlice.reducer;

export const { 
  getMetricsStart,
  getMetricsSuccess,
  getMetricsFail,
  resetErrorMessage
} = metricsSlice.actions;
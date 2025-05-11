import { createSlice } from '@reduxjs/toolkit';

const vaccineSlice = createSlice({
  name: 'vaccine',
  initialState: {
    vaccines: [],
    loading: false,
    error: null,
    successMsg: null,
    vaccinesFetch: {
      loading: false,
      error: null
    }
  },
  reducers: {
    addVaccineStart(state) {
      state.loading = true;
      state.successMsg = null;
      state.error = null;
    },
    addVaccineSuccess(state, action) {
      state.loading = false;
      state.vaccines = action.payload.vaccines;
      state.successMsg = 'Vaccine added successfully';
    },
    addVaccineFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchVaccinesStart(state) {
      state.vaccinesFetch.loading = true;
    },
    fetchVaccinesSuccess(state, action) {
      state.vaccinesFetch.loading = false;
      state.vaccines = action.payload.vaccines;
    },
    fetchVaccinesFail(state, action) {
      state.vaccinesFetch.loading = false;
      state.vaccinesFetch.error = action.payload;
    },
    resetErrorMessage(state) {
      state.error = null;
    },
    resetSuccessMessage(state) {
      state.successMsg = null;
    },
  }
});


export default vaccineSlice.reducer;

export const { 
  addVaccineStart,
  addVaccineSuccess,
  addVaccineFail,
  fetchVaccinesStart,
  fetchVaccinesSuccess,
  fetchVaccinesFail,
  resetErrorMessage,
  resetSuccessMessage
} = vaccineSlice.actions;
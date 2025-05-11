import { createSlice } from '@reduxjs/toolkit';

const driveSlice = createSlice({
  name: 'drives',
  initialState: {
    drives: [],
    createDrive: {
      loading: false,
      error: null,
      successMsg: null,
      id: ''
    },
    driveStatus: {
      eligibleDrives: [],
      inEligibleDrives: [],
      loading: false,
      error: null
    },
    vaccinate: {
      loading: false,
      error: null
    },
    drive: {
      loading: false,
      error: null,
      driveDetails: {}
    },
    update: {
      loading: false,
      error: null
    }
  },
  reducers: {
    createDriveStart(state) {
      state.createDrive.loading = true;
      state.createDrive.error = null;
      state.createDrive.successMsg = null;
      state.createDrive.id = '';
    },
    createDriveSuccess(state, action) {
      state.createDrive.loading = false;
      state.createDrive.successMsg = 'Drive created successfully';
      state.createDrive.id = action.payload.id;
    },
    createDriveFail(state, action) {
      state.createDrive.loading = false;
      state.createDrive.error = action.payload;
    },
    resetCreateErrorMessage(state) {
      state.createDrive.error = null;
    },
    resetCreateSuccessMessage(state) {
      state.createDrive.successMsg = null;
    },
    fetchDriveStatusStart(state) {
      state.driveStatus.loading = true;
      state.driveStatus.error = null;
    },
    fetchDriveStatusSuccess(state, action) {
      state.driveStatus.loading = false;
      state.driveStatus.eligibleDrives = action.payload.eligibleDrives;
      state.driveStatus.inEligibleDrives = action.payload.inEligibleDrives;
    },
    fetchDriveStatusFail(state, action) {
      state.driveStatus.loading = false;
      state.driveStatus.error = action.payload;
    },
    resetFetchDriveStatusMsg(state) {
      state.driveStatus.loading = false;
    },
    vaccinateStart(state) {
      state.vaccinate.loading = true;
      state.vaccinate.error = null;
    },
    vaccinateSuccess(state, action) {
      state.vaccinate.loading = false;
      state.driveStatus.eligibleDrives = action.payload.eligibleDrives;
      state.driveStatus.inEligibleDrives = action.payload.inEligibleDrives;
    },
    vaccinateFail(state, action) {
      state.vaccinate.loading = false;
      state.vaccinate.error = action.payload;
    },
    resetVaccinateStatusMsg(state) {
      state.vaccinate.error = null;
    },
    fetchDriveStart(state) {
      state.drive.loading = true;
      state.drive.error = null;
    },
    fetchDriveSuccess(state, action) {
      state.drive.loading = false;
      state.drive.driveDetails = action.payload.drive;
    },
    fetchDriveFail(state, action) {
      state.drive.loading = false;
      state.drive.error = action.payload;
    },
    updateDriveStart(state) {
      state.update.loading = true;
      state.update.error = null;
    },
    updateDriveSuccess(state, action) {
      state.update.loading = false;
      state.driveStatus.eligibleDrives = action.payload.eligibleDrives;
      state.driveStatus.inEligibleDrives = action.payload.inEligibleDrives;
    },
    updateDriveFail(state, action) {
      state.update.loading = false;
      state.update.error = action.payload;
    }
  }
});


export default driveSlice.reducer;

export const { 
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
  updateDriveSuccess,
  updateDriveFail,
  resetFetchDriveStatusMsg,
  resetVaccinateStatusMsg
} = driveSlice.actions;
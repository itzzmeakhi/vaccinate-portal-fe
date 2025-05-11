import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    studentList: [],
    error: null,
    loading: false,
    singleStudentAdd: {
      loading: false,
      error: null,
      successMsg: null
    },
    bulkStudentAdd: {
      loading: false,
      error: null,
      successMsg: null
    }
  },
  reducers: {
    singleStudentAddStart(state) {
      state.singleStudentAdd.loading = true;
      state.singleStudentAdd.error = null;
      state.singleStudentAdd.successMsg = null;
    },
    singleStudentAddSuccess(state) {
      state.singleStudentAdd.loading = false;
      state.singleStudentAdd.successMsg = 'Student added successfully';
    },
    singleStudentAddFail(state, action) {
      state.singleStudentAdd.loading = false;
      state.singleStudentAdd.error = action.payload;
    },
    resetSingleStudentSuccessMessage(state) {
      state.singleStudentAdd.successMsg = null;
    },
    resetSingleStudentErrorMessage(state) {
      state.singleStudentAdd.error = null;
    },
    bulkAddStudentsStart(state) {
      state.bulkStudentAdd.loading = true;
      state.bulkStudentAdd.error = null;
      state.bulkStudentAdd.successMsg = null;
    },
    bulkAddStudentsSuccess(state) {
      state.bulkStudentAdd.loading = false;
      state.bulkStudentAdd.successMsg = 'File uploaded successfully';
    },
    bulkAddStudentsFail(state, action) {
      state.bulkStudentAdd.loading = false;
      state.bulkStudentAdd.error = action.payload;
    },
    resetBulkStudentSuccessMessage(state) {
      state.bulkStudentAdd.successMsg = null;
    },
    resetBulkStudentErrorMessage(state) {
      state.bulkStudentAdd.error = null;
    },
    fetchStudentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStudentsSuccess(state, action) {
      const { students } = action.payload;
      state.loading = false;
      state.studentList = students;
    },
    fetchStudentsFail(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.students = [];
    },
    resetFetchStudentsMsg(state) {
      state.error = null;
    }
  }
});

export default studentSlice.reducer;

export const { 
  singleStudentAddStart,
  singleStudentAddSuccess,
  singleStudentAddFail,
  bulkAddStudentsStart,
  bulkAddStudentsSuccess,
  bulkAddStudentsFail,
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFail,
  resetSingleStudentErrorMessage,
  resetSingleStudentSuccessMessage,
  resetBulkStudentSuccessMessage,
  resetBulkStudentErrorMessage,
  resetFetchStudentsMsg
} = studentSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedInUser: null,
    loading: false
  },
  reducers: {
    loginUserStart(state) {
      state.loading = true;
    },
    loginUserSuccess(state, action) {
      state.loading = false;
      state.loggedInUser = action.payload;
    },
    loginUserFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetErrorMessage(state) {
      state.error = null;
    },
    logoutUser(state) {
      state.loading = false;
      state.error = null;
      state.loggedInUser = null;
    }
  }
});


export default userSlice.reducer;

export const { 
  loginUserStart,
  loginUserSuccess,
  loginUserFail,
  resetErrorMessage,
  logoutUser
} = userSlice.actions;
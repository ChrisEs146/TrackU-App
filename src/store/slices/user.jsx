import { createSlice } from "@reduxjs/toolkit";
import { signInUser, signUpUser, getUserInfo } from "../actions/userActions";

// Extracting user token from local storage
const userToken = localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null;

// Default slice state
const initialState = {
  userData: null,
  userToken,
  error: null,
  success: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("userToken");
      state.loading = false;
      state.error = null;
      state.userData = null;
      state.success = false;
      state.userToken = null;
    },
  },
  extraReducers: {
    [signInUser.pending]: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    [signInUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.userData = action.payload;
      state.userToken = action.payload.token;
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    [signUpUser.pending]: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    [signUpUser.fulfilled]: (state) => {
      state.success = true;
      state.userData = null;
      state.loading = false;
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    [getUserInfo.pending]: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.userData = action.payload;
    },
    [getUserInfo.rejected]: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { signInUser, signUpUser, getUserInfo } from "../actions/userActions";

const userToken = localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null;

const initialState = {
  userData: {},
  userToken,
  error: null,
  success: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state, action) => {
      localStorage.clear();
      return { ...state, userData: null, loading: false };
    },
  },
  extraReducers: {
    [signInUser.pending]: (state) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.userToken = action.payload.token;
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [signUpUser.pending]: (state) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getUserInfo.pending]: (state) => {
      state.loading = true;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    [getUserInfo.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;

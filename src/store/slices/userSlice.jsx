import { createSlice } from "@reduxjs/toolkit";

// Default slice state
const initialState = {
  userToken: null,
  userData: null,
};

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      const { accessToken } = action.payload;
      state.userToken = accessToken;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    logOut: (state) => {
      state.userToken = null;
    },
  },
});

export const { setUserData, setUserToken, logOut } = userSlice.actions;
export default userSlice.reducer;

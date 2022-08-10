import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const initialState = {
  authData: null,
};

const signInUser = createAsyncThunk("user/signIn", async (formData) => {
  try {
    const { data } = await api.signIn(formData);
    return data;
  } catch (error) {
    console.error(error);
  }
});

const signUpUser = createAsyncThunk("user/signUp", async (formData) => {
  try {
    const { data } = await api.signUp(formData);
    return data;
  } catch (error) {
    console.error(error);
  }
});

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    auth: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    },
    logOut: (state, action) => {
      localStorage.clear();
      return { ...state, authData: null };
    },
  },
});

export const { auth, logOut } = userSlice.actions;
export default userSlice.reducer;

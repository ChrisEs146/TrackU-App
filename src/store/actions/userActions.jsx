import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";

export const signInUser = createAsyncThunk("user/signIn", async (formData, { rejectWithValue }) => {
  try {
    const { data } = await api.signIn(formData);
    localStorage.setItem("userToken", data.token);
    return data;
  } catch (error) {
    const errorMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return rejectWithValue(errorMessage);
  }
});

export const signUpUser = createAsyncThunk("user/signUp", async (formData, { rejectWithValue }) => {
  try {
    const { data } = await api.signUp(formData);
    return data;
  } catch (error) {
    const errorMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return rejectWithValue(errorMessage);
  }
});

export const getUserInfo = createAsyncThunk(
  "user/getInfo",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const config = {
        headers: { Authorization: `Bearer ${user.userToken}` },
      };
      const { data } = await api.getUser(config);
      return data;
    } catch (error) {
      const errorMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(errorMessage);
    }
  }
);

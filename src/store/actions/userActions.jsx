import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";

/**
 * Async thunk for the user sign in process.
 */
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

/**
 * Async thunk for the user sign up process.
 */
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

/**
 * Async thunk to get the user's information iff token exists.
 */
export const getUserInfo = createAsyncThunk(
  "user/getInfo",
  async (args, { getState, rejectWithValue }) => {
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

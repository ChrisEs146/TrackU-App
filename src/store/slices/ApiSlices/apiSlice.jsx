import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUserToken } from "../userSlice";

// Setting base URL
const { REACT_APP_BASE_URL } = process.env;

// Base Query
const baseQuery = fetchBaseQuery({
  baseUrl: REACT_APP_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.userToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

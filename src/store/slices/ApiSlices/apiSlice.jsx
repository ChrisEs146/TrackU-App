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

// Private Query
const privateQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log("Sending refresh token");

    const refreshToken = await baseQuery("/users/refresh", api, extraOptions);
    console.log(refreshToken);

    if (refreshToken?.data) {
      api.dispatch(setUserToken({ ...refreshToken.data })); //CHECK USER DATA
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshToken?.error?.status === 401) {
        console.log("Refresh token expired");
        refreshToken.error.data.message = "Session Expired";
      }
      return refreshToken;
    }
  }
  return result;
};

// API slice wih injected endpoints
export const apiSlice = createApi({
  baseQuery: privateQuery,
  endpoints: (builder) => ({}),
});

import { logOut } from "../userSlice";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (credentials) => ({
        url: "/users/signin",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (userInfo) => ({
        url: "users/signup",
        method: "POST",
        body: { ...userInfo },
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/users/info",
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data.message);
          dispatch(logOut());
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 1000);
        } catch (error) {
          console.error(error);
        }
      },
    }),
    updateUser: builder.mutation({
      query: (userInfo) => ({
        url: "/users/update-user",
        method: "PATCH",
        body: { ...userInfo },
      }),
    }),
    updatePassword: builder.mutation({
      query: (credentials) => ({
        url: "/users/update-password",
        method: "PATCH",
        body: { ...credentials },
      }),
    }),
    deleteUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/delete-user",
        method: "DELETE",
        body: { ...credentials },
      }),
    }),
  }),
});

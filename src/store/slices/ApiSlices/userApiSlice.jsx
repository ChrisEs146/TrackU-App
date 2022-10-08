import { logOut, setUserToken } from "../userSlice";
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
        keepUnusedDataFor: 10,
      }),
      providesTags: ["User"],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOut());
          setTimeout(() => {
            dispatch(apiSlice.util.resetApiState());
          }, 2000);
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
      invalidatesTags: ["User"],
    }),
    updatePassword: builder.mutation({
      query: (credentials) => ({
        url: "/users/update-password",
        method: "PATCH",
        body: { ...credentials },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/delete-user",
        method: "DELETE",
        body: { ...credentials },
      }),
      invalidatesTags: ["User"],
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/users/refresh",
        method: "GET",
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { accessToken } = data;
          dispatch(setUserToken({ accessToken }));
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useUpdatePasswordMutation,
  useDeleteUserMutation,
  useSigninMutation,
  useSignupMutation,
  useGetUserQuery,
  useLogOutMutation,
  useRefreshMutation,
} = userApiSlice;

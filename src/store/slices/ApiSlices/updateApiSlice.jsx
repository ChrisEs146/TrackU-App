import { apiSlice } from "./apiSlice";

export const updateApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUpdates: builder.query({
      query: (projectId) => ({
        url: `/updates/${projectId}`,
      }),
      providesTags: ["Update"],
    }),
    addUpdate: builder.mutation({
      query: (projectId, updateData) => ({
        url: `/updates/${projectId}`,
        method: "POST",
        body: { ...updateData },
      }),
      invalidatesTags: ["Update"],
    }),
    getUpdate: builder.query({
      query: (projectId, updateId) => ({
        url: `/updates/project/${projectId}/update/${updateId}`,
      }),
    }),
    editUpdate: builder.mutation({
      query: (projectId, updateId, updateInfo) => ({
        url: `/updates/project/${projectId}/update/${updateId}`,
        method: "PUT",
        body: { ...updateInfo },
      }),
      invalidatesTags: ["Update"],
    }),
    deleteUpdate: builder.mutation({
      query: (projectId, updateId) => ({
        url: `/updates/project/${projectId}/update/${updateId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Update"],
    }),
  }),
});

export const {
  useGetUpdatesQuery,
  useAddUpdateMutation,
  useGetUpdateQuery,
  useEditUpdateMutation,
  useDeleteUpdateMutation,
} = updateApiSlice;

import { apiSlice } from "./apiSlice";

export const projectApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: "/projects",
        keepUnusedDataFor: 10,
      }),
      providesTags: ["Project"],
    }),
    addProject: builder.mutation({
      query: (projectData) => ({
        url: "/projects",
        method: "POST",
        body: { ...projectData },
      }),
      invalidatesTags: ["Project"],
    }),
    getProject: builder.query({
      query: (projectId) => ({
        url: `/projects/${projectId}`,
        keepUnusedDataFor: 10,
      }),
    }),
    updateProject: builder.mutation({
      query: (projectId, projectData) => ({
        url: `/projects/${projectId}`,
        method: "PUT",
        body: { ...projectData },
      }),
      invalidatesTags: ["Project"],
    }),
    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `/projects/${projectId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useAddProjectMutation,
  useGetProjectQuery,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = projectApiSlice;

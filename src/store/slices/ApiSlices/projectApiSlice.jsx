import { apiSlice } from "./apiSlice";

export const projectApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: "/projects",
        keepUnusedDataFor: 10,
      }),
    }),
    addProject: builder.mutation({
      query: (projectData) => ({
        url: "/projects",
        method: "POST",
        body: { ...projectData },
      }),
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
    }),
    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `/projects/${projectId}`,
        method: "DELETE",
      }),
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

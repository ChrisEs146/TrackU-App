import { apiSlice } from "./apiSlice";

export const projectApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: "/projects",
      }),
      transformResponse: (response) => {
        return response.sort((a, b) => {
          let dateA = new Date(a.createdAt),
            dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
      },
      providesTags: ["Projects"],
    }),
    addProject: builder.mutation({
      query: (projectData) => ({
        url: "/projects",
        method: "POST",
        body: { ...projectData },
      }),
      invalidatesTags: ["Projects"],
    }),
    getProject: builder.query({
      query: (projectId) => ({
        url: `/projects/${projectId}`,
      }),
      providesTags: ["Project"],
    }),
    updateProject: builder.mutation({
      query: ({ projectId, projectData }) => ({
        url: `/projects/${projectId}`,
        method: "PUT",
        body: { ...projectData },
      }),
      invalidatesTags: ["Project", "Projects"],
    }),
    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `/projects/${projectId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
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

import {
  useAddProjectMutation,
  useUpdateProjectMutation,
} from "../store/slices/ApiSlices/projectApiSlice";
import {
  useAddUpdateMutation,
  useEditUpdateMutation,
} from "../store/slices/ApiSlices/updateApiSlice";

/**
 * Encapsulates the use of the add and update mutations
 * for the projects and updates. Depending on the type and editmode
 * it will return an object with an action(function) and the isSuccess, isError,
 * isLoading and error states.
 * @param {string} type Project | Update
 * @param {boolean} editMode
 * @param {string} options
 * @returns Object with a function to call an endpoint and the isSuccess, isError,
 * isLoading and error states.
 */
const useFormAction = (
  type,
  editMode,
  options = { projectId: undefined, updateId: undefined, formData: undefined }
) => {
  const [
    addProject,
    {
      isSuccess: isAddProjectSuccess,
      isError: isAddProjectError,
      isLoading: isAddProjectLoading,
      error: addProjectError,
    },
  ] = useAddProjectMutation();
  const [
    updateProject,
    {
      isSuccess: isUpdateProjectSuccess,
      isError: isUpdateProjectError,
      isLoading: isUpdateProjectLoading,
      error: updateProjectError,
    },
  ] = useUpdateProjectMutation();
  const [
    addUpdate,
    {
      isSuccess: isAddUpdateSuccess,
      isError: isAddUpdateError,
      isLoading: isAddUpdateLoading,
      error: addUpdateError,
    },
  ] = useAddUpdateMutation();
  const [
    editUpdate,
    {
      isSuccess: isEditUpdateSuccess,
      isError: isEditUpdateError,
      isLoading: isEditUpdateLoading,
      error: editUpdateError,
    },
  ] = useEditUpdateMutation();

  const formActions = {
    project: {
      add: {
        action: function () {
          addProject(options.formData);
        },
        isSuccess: isAddProjectSuccess,
        isError: isAddProjectError,
        isLoading: isAddProjectLoading,
        error: addProjectError,
      },
      edit: {
        action: function () {
          updateProject({ projectId: options.projectId, projectData: options.formData });
        },
        isSuccess: isUpdateProjectSuccess,
        isError: isUpdateProjectError,
        isLoading: isUpdateProjectLoading,
        error: updateProjectError,
      },
    },
    update: {
      add: {
        action: function () {
          addUpdate({ projectId: options.projectId, updateData: options.formData });
        },
        isSuccess: isAddUpdateSuccess,
        isError: isAddUpdateError,
        isLoading: isAddUpdateLoading,
        error: addUpdateError,
      },
      edit: {
        action: function () {
          editUpdate({
            projectId: options.projectId,
            updateId: options.updateId,
            updateInfo: options.formData,
          });
        },
        isSuccess: isEditUpdateSuccess,
        isError: isEditUpdateError,
        isLoading: isEditUpdateLoading,
        error: editUpdateError,
      },
    },
  };

  return formActions[type.toLowerCase()][editMode ? "edit" : "add"];
};

export default useFormAction;

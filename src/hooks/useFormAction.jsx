import {
  useAddProjectMutation,
  useUpdateProjectMutation,
} from "../store/slices/ApiSlices/projectApiSlice";
import {
  useAddUpdateMutation,
  useEditUpdateMutation,
} from "../store/slices/ApiSlices/updateApiSlice";

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
          updateProject(options.projectId, options.formData);
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

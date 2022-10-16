import { useGetProjectQuery } from "../store/slices/ApiSlices/projectApiSlice";
import { useGetUpdateQuery } from "../store/slices/ApiSlices/updateApiSlice";

const useItemData = (type, editMode, options = { projectId: undefined, updateId: undefined }) => {
  const { data: resultProject, isSuccess: resultProjectSuccess } = useGetProjectQuery(
    options.projectId
  );
  const { data: resultUpdate, isSuccess: resultUpdateSuccess } = useGetUpdateQuery({
    projectId: options.projectId,
    updateId: options.updateId,
  });

  let itemResult;
  if (!editMode) {
    itemResult = null;
  } else if (type === "Project") {
    itemResult = {
      ...resultProject,
      isSuccess: resultProjectSuccess,
    };
  } else if (type === "Update") {
    itemResult = { ...resultUpdate, isSuccess: resultUpdateSuccess };
  }

  return itemResult;
};

export default useItemData;

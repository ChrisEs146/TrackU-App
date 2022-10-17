import { updateApiSlice } from "../store/slices/ApiSlices/updateApiSlice";
import { projectApiSlice } from "../store/slices/ApiSlices/projectApiSlice";

/**
 * Abstracts the use of the getProject and getUpdate queries.
 * Depending on the type and editmode, this hook could return:
 *
 * **Null** => In case editMode is false.
 *
 * **Project Data** (Requires projectId) => In case type is project and editMode is true.
 *
 * **Update Data** (Requires projectId and updateId) => In case the type is update and editMode is true.
 * @param {string} type Project | Update
 * @param {boolean} editMode
 * @param {string} options
 * @returns Null | Object with either a project's or update's data.
 */
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

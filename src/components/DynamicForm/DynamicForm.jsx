import { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { NavLink, useParams } from "react-router-dom";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import FormInput from "../FormInput/FormInput";
import { getItemData } from "../../Utils/ItemData";
import useItemData from "../../hooks/useItemData";
import useFormAction from "../../hooks/useFormAction";
import "./dynamicForm.css";
import { isInputValid } from "../../Utils/Functions";

/**
 * Handles creation and update functionalities for projects and updates.
 * It requires a type (Project or Update) and an editMode value,
 * which could either be true or false.
 *
 * @param {string} type Project | Update
 * @param {boolean} editMode
 * @returns Dynamic Form component
 */
const DynamicForm = ({ type, editMode }) => {
  // Default data and form state
  const defaultForm = { title: "", description: "", status: "", progress: 0 };
  const [formData, setFormData] = useState(defaultForm);

  // Form btn state
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // Modal confirmation state
  const [isConfirmationActive, setIsConfirmationActive] = useState(false);

  // Getting projectId and updateId from URL
  const { projectId, updateId } = useParams();

  /**
   * Getting an object with functions and states
   * to add or edit a project | update
   */
  const item = useFormAction(type, editMode, { projectId, updateId, formData });

  /**
   * Getting an object with an item data (project or update). Depending on
   * the type and editMode provided.
   */
  const itemFormData = useItemData(type, editMode, { projectId, updateId });

  // Data to create the modal confirmation.
  const itemData = getItemData(editMode ? "type2" : "type1", type);

  const formInput = {
    name: "title",
    type: "text",
    label: "Title",
    errorMsg: "Title should be 4 - 24 characters long",
    placeholder: "Title",
    pattern: "^(?=\\S)[A-Za-z0-9,. ]{4,50}$",
    minLength: 4,
    maxLength: 50,
    required: true,
  };

  // Refills form on update
  useEffect(() => {
    if (itemFormData !== null && itemFormData.isSuccess) {
      setFormData({
        title: itemFormData.title,
        description: itemFormData.description,
        status: itemFormData.status,
        progress: itemFormData.progress,
      });
    }
    //eslint-disable-next-line
  }, [itemFormData?.isSuccess]);

  /**
   * Activates / deactivates form's button
   * if title and description are valid.
   */
  useEffect(() => {
    if (isInputValid("title", formData.title) && formData.description.length >= 4) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [formData.title, formData.description]);

  /**
   * Handles the changes in the form's data.
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles the state switch in the modal confirmation
   */
  const handleConfirmActivation = () => setIsConfirmationActive(!isConfirmationActive);

  /**
   * Handles the execution of the item's action.
   * It could be addProject, updateProject, addUpdate
   * or editUpdate.
   */
  const handleSubmit = () => {
    item.action();
  };

  return (
    <>
      <div className="dynamicForm">
        <div className="dynamicForm__container">
          <NavLink title="Go Back" className="dynamicForm__back-btn" to={-1}>
            <BiArrowBack />
          </NavLink>
          <div className="dynamicForm__title">
            <h2>
              {editMode ? "Edit" : "New"} {type}
            </h2>
            {!editMode && <p>{`Create new ${type}`}</p>}
          </div>
          <form className="dynamicForm__form">
            <FormInput value={formData.title} handleChange={handleChange} {...formInput} />
            {editMode && type === "Project" && (
              <div className="dynamicForm__status-container">
                <div className="dynamicForm__status">
                  <label htmlFor="status">Status:</label>
                  <select name="status" id="status" value={formData.status} onChange={handleChange}>
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="dynamicForm__progress">
                  <div className="dynamicForm__progress-label">
                    <label htmlFor="progress">Progress</label>
                    <span>{`${formData.progress}%`}</span>
                  </div>
                  <input
                    title={`${formData.progress}%`}
                    type="range"
                    name="progress"
                    id="progress"
                    min="0"
                    max="100"
                    step="1"
                    value={formData.progress}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            <div className="dynamicForm__description-container">
              <label className="dynamicForm__description-label" htmlFor="description">
                Description
              </label>
              <textarea
                required
                className="dynamicForm__description"
                name="description"
                id="description"
                placeholder="Description"
                cols="30"
                rows="10"
                value={formData.description}
                onChange={handleChange}
                maxLength="800"
                minLength="4"
              ></textarea>
            </div>
            <button
              className="dynamicForm__btn"
              type="button"
              onClick={handleConfirmActivation}
              disabled={isBtnDisabled}
            >
              {editMode ? "Edit" : "Add"} {type}
            </button>
          </form>
        </div>
      </div>
      <ConfirmationModal
        item={itemData}
        isSuccess={item.isSuccess}
        isError={item.isError}
        isLoading={item.isLoading}
        error={item.error}
        submit={handleSubmit}
        isModalActive={isConfirmationActive}
        handleModalActivation={handleConfirmActivation}
      />
    </>
  );
};

export default DynamicForm;

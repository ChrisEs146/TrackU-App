import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { NavLink, useParams } from "react-router-dom";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import FormInput from "../FormInput/FormInput";
import { getItemData } from "../../Utils/ItemData";
import useItemData from "../../hooks/useItemData";
import "./dynamicForm.css";
import useFormAction from "../../hooks/useFormAction";
import { useEffect } from "react";

const DynamicForm = ({ type, editMode }) => {
  const defaultForm = { title: "", description: "", status: "", progress: 0 };
  const [formData, setFormData] = useState(defaultForm);
  const [isConfirmationActive, setIsConfirmationActive] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const formInput = {
    name: "title",
    type: "text",
    label: "Title",
    errorMsg: "Title should be 4 - 24 characters long",
    placeholder: "Title",
    pattern: "^[A-Za-z0-9,. ]{4,50}$",
    minLength: 4,
    maxLength: 50,
  };
  };

  // Modal window information
  const modalData = {
    title: "ARE YOU SURE?",
    action: "confirm",
    description: `You are about to ${
      editMode ? "update this" : "add a new"
    } ${type.toLowerCase()}. If you want to proceed click confirm, otherwise cancel this operation.`,
  };

  return (
    <>
      <div className="dynamicForm">
        <div className="dynamicForm__container">
          <NavLink title="Go Back" className="dynamicForm__back-btn" to="/dashboard/projects">
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
            <button className="dynamicForm__btn" type="button" onClick={handleConfirmActivation}>
              {editMode ? "Edit" : "Add"} {type}
            </button>
          </form>
        </div>
      </div>
      <ConfirmationModal
        action={modalData.action}
        title={modalData.title}
        description={modalData.description}
        isModalActive={isConfirmationActive}
        handleModalActivation={handleConfirmActivation}
      />
    </>
  );
};

export default DynamicForm;

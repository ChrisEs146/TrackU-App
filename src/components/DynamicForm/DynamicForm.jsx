import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import FormInput from "../FormInput/FormInput";
import "./dynamicForm.css";

const DynamicForm = (props) => {
  const defaultForm = { title: "", description: "", status: "", progress: "" };
  const [formData, setFormData] = useState(defaultForm);
  const [isConfirmationActive, setIsConfirmationActive] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmActivation = () => setIsConfirmationActive(!isConfirmationActive);

  const handleFormClose = () => {
    setFormData(defaultForm);
    props.handleModalActivation();
  };

  const formInput = {
    name: "title",
    type: "text",
    label: "Title",
    errorMsg: "Title should be 4 - 24 characters long",
    placeholder: "Title",
    pattern: "^[A-Za-z0-9,. ]{4,24}$",
  };

  // Modal window information
  const modalData = {
    title: "ARE YOU SURE?",
    action: "confirm",
    description: `You are about to ${
      props.editMode ? "update this" : "add a new"
    } ${props.type.toLowerCase()}. If you want to proceed click confirm, otherwise cancel this operation.`,
  };

  return (
    <>
      <div className="dynamicForm">
        <button title="Close Form" className="dynamicForm__close-btn" onClick={handleFormClose}>
          <AiOutlinePlus />
        </button>
        <div className="dynamicForm__title">
          <h2>{`${props.editMode ? "Update" : "New"} ${props.type}`}</h2>
          {!props.editMode && <p>{`Create new ${props.type}`}</p>}
        </div>
        <form className="dynamicForm__form">
          <FormInput value={formData.title} handleChange={handleChange} {...formInput} />
          {props.editMode && props.type === "Project" && (
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
                <label htmlFor="progress">Progress</label>
                <input
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
            {`${props.editMode ? "Update" : "Add"} ${props.type}`}
          </button>
        </form>
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

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import FormInput from "../FormInput/FormInput";
import "./addForm.css";

const AddForm = (props) => {
  const defaultForm = { title: "", description: "" };
  const [addFormData, setAddFormData] = useState(defaultForm);
  const [isConfirmationActive, setIsConfirmationActive] = useState(false);

  const handleChange = (e) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };

  const handleConfirmActivation = () => setIsConfirmationActive(!isConfirmationActive);

  const handleFormClose = () => {
    setAddFormData(defaultForm);
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
    description: `You are about to add a new ${props.type.toLowerCase()}. If you want to proceed click confirm, otherwise cancel this operation.`,
  };

  return (
    <>
      <div className="addForm">
        <button title="Close Form" className="addForm__close-btn" onClick={handleFormClose}>
          <AiOutlinePlus />
        </button>
        <div className="addForm__title">
          <h2>{`New ${props.type}`}</h2>
          <p>{`Create new ${props.type}`}</p>
        </div>
        <form className="addForm__form">
          <FormInput value={addFormData.title} handleChange={handleChange} {...formInput} />
          <div className="addForm__description-container">
            <label className="addForm__description-label" htmlFor="description">
              Description
            </label>
            <textarea
              required
              className="addForm__description"
              name="description"
              id="description"
              placeholder="Description"
              cols="30"
              rows="10"
              value={addFormData.description}
              onChange={handleChange}
              maxLength="800"
              minLength="4"
            ></textarea>
          </div>
          <button className="addForm__btn" type="button" onClick={handleConfirmActivation}>
            {`Add ${props.type}`}
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

export default AddForm;
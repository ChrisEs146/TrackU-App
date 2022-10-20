import { useState } from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { getItemData } from "../../../Utils/ItemData";
import FormInput from "../../../components/FormInput/FormInput";
import FormCard from "../../../components/FormCard/FormCard";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import { useUpdateUserMutation } from "../../../store/slices/ApiSlices/userApiSlice";
import { isInputValid } from "../../../Utils/Functions";
import "./userUpdate.css";

/**
 * UserUpdate page contains a form that allows the user
 * to update his/her name by providing the email and
 * the new name.
 * @returns UserUpdate page
 */
const UserUpdate = () => {
  const { userData } = useSelector((state) => state.user);
  const [isConfirmActive, handleConfirmActivation] = useOutletContext();
  const [updateUser, { isLoading, isSuccess, isError, error }] = useUpdateUserMutation();
  const [updateFormData, setUpdateFormData] = useState({
    newFullName: userData.fullName,
  });

  // Array Inputs
  const formInputs = [
    {
      id: 1,
      name: "newFullName",
      type: "text",
      label: "Full Name",
      icon: <FaUserAlt />,
      errorMsg:
        "Name should be at least 4 characters long and shouldn't include any special character!",
      placeholder: "Full Name",
      pattern: "^[A-Za-z0-9 ]{4,}$",
      minLength: 4,
      required: true,
    },
  ];

  // Modal window information
  const itemData = getItemData("type2", "user");

  /**
   * Handles the changes in the form's input.
   */
  const handleChange = (e) => {
    setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
  };

  /**
   * Handles user update form submission.
   */
  const handleSubmit = () => {
    updateUser(updateFormData);
  };

  return (
    <>
      <FormCard>
        <div className="update__form-title">
          <h2>Update Name</h2>
          <p>Enter a new name</p>
        </div>
        <form className="update__form">
          {formInputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                value={updateFormData[input.name]}
                handleChange={handleChange}
                {...input}
              />
            );
          })}
          <button
            className="update__form-btn"
            type="button"
            onClick={handleConfirmActivation}
            disabled={!isInputValid("fullname", updateFormData.newFullName)}
          >
            Update Name
          </button>
        </form>
      </FormCard>
      <ConfirmationModal
        item={itemData}
        submit={handleSubmit}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
        isLoading={isLoading}
        isModalActive={isConfirmActive}
        handleModalActivation={handleConfirmActivation}
      />
    </>
  );
};

export default UserUpdate;

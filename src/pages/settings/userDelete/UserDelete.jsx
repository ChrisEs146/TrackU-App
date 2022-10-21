import { useState } from "react";
import { useSelector } from "react-redux";
import { FaLock, FaEnvelope } from "react-icons/fa";
import FormInput from "../../../components/FormInput/FormInput";
import FormCard from "../../../components/FormCard/FormCard";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import { useOutletContext } from "react-router-dom";
import { getItemData } from "../../../Utils/ItemData";
import { useDeleteUserMutation } from "../../../store/slices/ApiSlices/userApiSlice";
import { isInputValid } from "../../../Utils/Functions";
import "./userDelete.css";

/**
 * UserDelete page contains a form that allows users
 * to delete their accounts by providing a password
 * confirmation.
 * @returns UserDelete page
 */
const UserDelete = () => {
  const { userData } = useSelector((state) => state.user);
  const [isConfirmActive, handleConfirmActivation] = useOutletContext();
  const [deleteUser, { isSuccess, isError, isLoading, error }] = useDeleteUserMutation();
  const [deleteFormData, setDeleteFormData] = useState({
    email: userData.email,
    password: "",
  });

  // Array Inputs
  const formInputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      label: "Email Address",
      icon: <FaEnvelope />,
      errorMsg: "It must be a valid email!",
      placeholder: "Email",
      readOnly: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      label: "Confirm Password",
      icon: <FaLock />,
      placeholder: "Confirm Password",
      minLength: 8,
      maxLength: 20,
      errorMsg: "Confirm your current password.",
      required: true,
    },
  ];

  // Modal window information
  const itemData = getItemData("type3", "user");

  /**
   * Handles the changes in the form's inputs.
   */
  const handleChange = (e) => {
    setDeleteFormData({ ...deleteFormData, [e.target.name]: e.target.value });
  };

  /**
   * Handles user delete form submission
   */
  const handleSubmit = () => {
    deleteUser(deleteFormData);
  };

  return (
    <>
      <FormCard>
        <div className="delete__form-title">
          <h2>Delete Account</h2>
          <p>Confirm your password to delete this account</p>
        </div>
        <form className="delete__form">
          {formInputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                value={deleteFormData[input.name]}
                handleChange={handleChange}
                {...input}
              />
            );
          })}
          <button
            className="delete__form-btn"
            type="button"
            onClick={handleConfirmActivation}
            disabled={!isInputValid("password", deleteFormData.password)}
          >
            Delete Account
          </button>
        </form>
      </FormCard>
      <ConfirmationModal
        item={itemData}
        submit={handleSubmit}
        isLoading={isLoading}
        isError={isError}
        error={error}
        isSuccess={isSuccess}
        isModalActive={isConfirmActive}
        handleModalActivation={handleConfirmActivation}
      />
    </>
  );
};

export default UserDelete;

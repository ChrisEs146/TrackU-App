import { useState } from "react";
import { useSelector } from "react-redux";
import { FaLock, FaEnvelope } from "react-icons/fa";
import FormInput from "../../../components/FormInput/FormInput";
import FormCard from "../../../components/FormCard/FormCard";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import "./userDelete.css";
import { useOutletContext } from "react-router-dom";
import { getModalData } from "../../../Utils/Functions";

/**
 * UserDelete page contains a form that allows users
 * to delete their accounts by providing a password
 * confirmation.
 * @returns UserDelete page
 */
const UserDelete = () => {
  const { userData } = useSelector((state) => state.user);
  const [isConfirmActive, handleConfirmActivation] = useOutletContext();
  const [deleteFormData, setDeleteFormData] = useState({
    email: userData.email,
    password: "",
  });

  // Inputs array
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
      name: "Password",
      type: "password",
      label: "Confirm Password",
      icon: <FaLock />,
      placeholder: "Confirm Password",
      minLength: 8,
      maxLength: 20,
    },
  ];

  // Modal window information
  const modalData = getModalData("User", false, "Delete");

  /**
   * Handles the changes in the form's inputs.
   * @param {*} e
   */
  const handleChange = (e) => {
    setDeleteFormData({ ...deleteFormData, [e.target.name]: e.target.value });
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
          <button className="delete__form-btn" type="button" onClick={handleConfirmActivation}>
            Delete Account
          </button>
        </form>
      </FormCard>
      <ConfirmationModal
        modal={modalData}
        isModalActive={isConfirmActive}
        handleModalActivation={handleConfirmActivation}
      />
    </>
  );
};

export default UserDelete;

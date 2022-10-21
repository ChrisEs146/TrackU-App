import { useState, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import FormInput from "../../../components/FormInput/FormInput";
import FormCard from "../../../components/FormCard/FormCard";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import { useOutletContext } from "react-router-dom";
import { getItemData } from "../../../Utils/ItemData";
import { useUpdatePasswordMutation } from "../../../store/slices/ApiSlices/userApiSlice";
import { isInputValid } from "../../../Utils/Functions";
import "./changePassword.css";

/**
 * Shows form that allows users to change their password
 * by providing the current password, new password and
 * a confirmation of the new password.
 * @returns ChangePassword page
 */
const ChangePassword = () => {
  const [isConfirmActive, handleConfirmActivation] = useOutletContext();
  const [updatePassword, { isSuccess, isError, isLoading, error }] = useUpdatePasswordMutation();
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [pwdFormData, setPwdFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Array Inputs
  const formInputs = [
    {
      id: 1,
      name: "currentPassword",
      type: "password",
      label: "Current Password",
      icon: <FaLock />,
      placeholder: "Password",
      errorMsg: "Confirm Current Password",
      minLength: 8,
      maxLength: 20,
      required: true,
    },
    {
      id: 2,
      name: "newPassword",
      type: "password",
      label: "New Password",
      icon: <FaLock />,
      errorMsg:
        "Must be 8 - 20 characters, include at least 1 letter, 1 number and 1 special character(!@#%^&*).",
      placeholder: "New Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%^&*])[a-zA-Z0-9!@#%^&*]{8,20}$",
      minLength: 8,
      maxLength: 20,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      label: "Confirm New Password",
      icon: <FaLock />,
      errorMsg: "Passwords don't match",
      placeholder: "Confirm New Password",
      pattern: pwdFormData.newPassword,
      minLength: 8,
      maxLength: 20,
      required: true,
    },
  ];

  // Modal window information
  const itemData = getItemData("type2", "user");
  /**
   * Handles the form's input changes
   */
  const handleChange = (e) => {
    setPwdFormData({ ...pwdFormData, [e.target.name]: e.target.value });
  };

  /**
   * Handles user's passwod update form submission.
   */
  const handleSubmit = () => {
    updatePassword(pwdFormData);
  };

  useEffect(() => {
    const { currentPassword, confirmPassword, newPassword } = pwdFormData;
    const test1 = isInputValid("password", currentPassword);
    const test2 = isInputValid("password", confirmPassword);
    const test3 = isInputValid("password", newPassword);

    if (test1 && test2 && test3) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [
    pwdFormData?.confirmPassword,
    pwdFormData?.currentPassword,
    pwdFormData?.newPassword,
    pwdFormData,
  ]);

  return (
    <>
      <FormCard>
        <div className="changePwd__form-title">
          <h2>Change Password</h2>
          <p>Enter a new password</p>
        </div>
        <form className="changePwd__form">
          {formInputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                value={pwdFormData[input.name]}
                handleChange={handleChange}
                {...input}
              />
            );
          })}
          <button
            className="changePwd__form-btn"
            type="button"
            onClick={handleConfirmActivation}
            disabled={isBtnDisabled}
          >
            Change Password
          </button>
        </form>
      </FormCard>
      <ConfirmationModal
        item={itemData}
        submit={handleSubmit}
        isSuccess={isSuccess}
        isLoading={isLoading}
        isError={isError}
        error={error}
        isModalActive={isConfirmActive}
        handleModalActivation={handleConfirmActivation}
      />
    </>
  );
};

export default ChangePassword;

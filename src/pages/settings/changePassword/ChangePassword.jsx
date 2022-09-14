import { useState } from "react";
import { useSelector } from "react-redux";
import { FaLock } from "react-icons/fa";
import FormInput from "../../../components/FormInput/FormInput";
import FormCard from "../../../components/FormCard/FormCard";
import "./changePassword.css";

/**
 * Shows form that allows users to change their password
 * by providing the current password, new password and
 * a confirmation of the new password.
 * @returns ChangePassword page
 */
const ChangePassword = () => {
  const { userData } = useSelector((state) => state.user);
  const [pwdFormData, setPwdFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  // Inputs array
  const formInputs = [
    {
      id: 1,
      name: "currentPassword",
      type: "password",
      label: "Current Password",
      icon: <FaLock />,
      errorMsg:
        "Password should be 8 - 20 characters. It must include at least 1 letter, 1 number and 1 special character!",
      placeholder: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 2,
      name: "newPassword",
      type: "password",
      label: "New Password",
      icon: <FaLock />,
      errorMsg:
        "Password should be 8 - 20 characters. It must include at least 1 letter, 1 number and 1 special character!",
      placeholder: "New Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 3,
      name: "confirmNewPassword",
      type: "password",
      label: "Confirm New Password",
      icon: <FaLock />,
      errorMsg: "Passwords don't match",
      placeholder: "Confirm New Password",
      pattern: pwdFormData.newPassword,
    },
  ];

  /**
   * Handles the form's input changes
   * @param {*} e
   */
  const handleChange = (e) => {
    setPwdFormData({ ...pwdFormData, [e.target.name]: e.target.value });
  };

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
          <button className="changePwd__form-btn" type="button" onClick={handleModalActivation}>
            Change Password
          </button>
        </form>
      </FormCard>
      <ConfirmationModal
        action={modalData.action}
        title={modalData.title}
        description={modalData.description}
        isModalActive={isModalActive}
        handleModalActivation={handleModalActivation}
      />
    </>
  );
};

export default ChangePassword;

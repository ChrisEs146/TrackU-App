import { useState } from "react";
import { useSelector } from "react-redux";
import { FaLock } from "react-icons/fa";
import FormInput from "../../../components/FormInput/FormInput";
import FormCard from "../../../components/FormCard/FormCard";
import "./changePassword.css";
const ChangePassword = () => {
  const { userData } = useSelector((state) => state.user);
  const [pwdFormData, setPwdFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
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

  const handleChange = (e) => {
    setPwdFormData({ ...pwdFormData, [e.target.name]: e.target.value });
  };

  return (
    <div className="changePwd__form-container">
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
        <button className="changePwd__form-btn" type="submit">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;

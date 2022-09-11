import { useState } from "react";
import { useSelector } from "react-redux";
import { FaLock, FaEnvelope } from "react-icons/fa";
import FormInput from "../../../components/FormInput/FormInput";
import FormCard from "../../../components/FormCard/FormCard";
import "./userDelete.css";

/**
 * UserDelete page contains a form that allows users
 * to delete their accounts by providing a password
 * confirmation.
 * @returns UserDelete page
 */
const UserDelete = () => {
  const { userData } = useSelector((state) => state.user);
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
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      icon: <FaLock />,
      errorMsg: "Passwords don't match",
      placeholder: "Confirm Password",
      pattern: deleteFormData.password,
    },
  ];

  /**
   * Handles the changes in the form's inputs.
   * @param {*} e
   */
  const handleChange = (e) => {
    setDeleteFormData({ ...deleteFormData, [e.target.name]: e.target.value });
  };

  return (
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
        <button className="delete__form-btn" type="submit">
          Delete Account
        </button>
      </form>
    </FormCard>
  );
};

export default UserDelete;

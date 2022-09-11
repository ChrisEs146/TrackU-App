import { useState } from "react";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import FormInput from "../../../components/FormInput/FormInput";
import FormCard from "../../../components/FormCard/FormCard";
import "./userUpdate.css";

/**
 * UserUpdate page contains a form that allows the user
 * to update his/her name by providing the email and
 * the new name.
 * @returns UserUpdate page
 */
const UserUpdate = () => {
  const { userData } = useSelector((state) => state.user);
  const [updateFormData, setUpdateFormData] = useState({
    fullName: userData.fullName,
    email: userData.email,
  });

  // Inputs array
  const formInputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      label: "Full Name",
      icon: <FaUserAlt />,
      errorMsg:
        "Name should be at least 4 characters long and shouldn't include any special character!",
      placeholder: "Full Name",
      pattern: "^[A-Za-z0-9 ]{4,}$",
    },
  ];

  /**
   * Handles the changes in the form's input.
   * @param {*} e
   */
  const handleChange = (e) => {
    setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
  };

  return (
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
        <button className="update__form-btn" type="submit">
          Update Name
        </button>
      </form>
    </FormCard>
  );
};

export default UserUpdate;

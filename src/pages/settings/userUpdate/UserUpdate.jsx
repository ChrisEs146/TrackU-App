import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import FormInput from "../../../components/FormInput/FormInput";
import "./userUpdate.css";
const UserUpdate = () => {
  const { userData } = useSelector((state) => state.user);
  const [updateFormData, setUpdateFormData] = useState({
    fullName: userData.fullName,
    email: userData.email,
  });
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
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email Address",
      icon: <FaEnvelope />,
      errorMsg: "It must be a valid email!",
      placeholder: "Email",
    },
  ];

  const handleChange = (e) => {
    setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
  };

  return (
    <div className="update__form-container">
      <div className="update__form-title">
        <h2>Update Account</h2>
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
          Update Account
        </button>
      </form>
    </div>
  );
};

export default UserUpdate;

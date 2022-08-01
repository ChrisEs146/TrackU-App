import { useState } from "react";
import "./input.css";

const Input = (props) => {
  const { name, label, errorMsg, type, handleChange, value, placeholder, pattern } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="input__container">
      <label htmlFor={name}>{label}</label>
      <span>{errorMsg}</span>
    </div>
  );
};

export default Input;

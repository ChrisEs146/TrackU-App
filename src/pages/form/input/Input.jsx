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
      <input
        type={type}
        name={name}
        id={name}
        required
        value={value}
        placeholder={placeholder}
        pattern={pattern}
        focused={focused.toString()}
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
      />
      <span>{errorMsg}</span>
    </div>
  );
};

export default Input;

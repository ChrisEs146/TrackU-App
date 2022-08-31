import { useState } from "react";
import "./input.css";

/**
 * Input field component to be used in the sign up and sign in forms.
 * @param {*} props
 * @returns Custom input field
 */
const Input = (props) => {
  const { name, label, errorMsg, type, handleChange, value, placeholder, pattern } = props;
  const [focused, setFocused] = useState(false);

  /**
   * Function that sets the focus state.
   */
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

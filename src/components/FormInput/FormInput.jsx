import { useState } from "react";
import "./formInput.css";

/**
 * Input field component to be used in the sign up and sign in forms.
 * @returns Custom input field
 */
const Input = (props) => {
  const { label, errorMsg, handleChange, icon, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Function that sets the focus state.
   */
  const handleFocus = (e) => {
    setFocused(true);
  };

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  return (
    <div className="input__container">
      <label htmlFor={inputProps.name}>
        {icon}
        {label}
      </label>
      <input
        {...inputProps}
        focused={focused.toString()}
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
      />
      {errorMsg && <span>{errorMsg}</span>}
    </div>
  );
};

export default Input;

import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./formInput.css";

/**
 * Input field component to be used in the sign up and sign in forms.
 * @returns Custom input field
 */
const Input = (props) => {
  const { label, errorMsg, handleChange, icon, type, ...inputProps } = props;
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
      <div className="input__inner-container" data-type={type}>
        <input
          {...inputProps}
          type={type === "password" && showPassword ? "text" : type}
          focused={focused.toString()}
          onChange={handleChange}
          onBlur={handleFocus}
          onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
        />
        <button className="input__password-toggle" type="button" onClick={handlePasswordToggle}>
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
        {errorMsg && <span>{errorMsg}</span>}
      </div>
    </div>
  );
};

export default Input;

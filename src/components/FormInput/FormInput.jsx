import { useState } from "react";
import "./formInput.css";

/**
 * Input field component to be used in the sign up and sign in forms.
 * @param {*} props
 * @returns Custom input field
 */
const Input = (props) => {
  const { name, label, errorMsg, type, handleChange, value, placeholder, pattern, icon } = props;
  const [focused, setFocused] = useState(false);

  /**
   * Function that sets the focus state.
   */
  const handleFocus = () => {
    setFocused(!focused);
  };

  return (
    <div className="input__container">
      <label htmlFor={name}>
        {icon}
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        pattern={pattern}
        focused={focused.toString()}
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
      />
      {errorMsg && <span>{errorMsg}</span>}
    </div>
  );
};

export default Input;

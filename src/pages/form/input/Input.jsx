import { useState } from "react";
import "./input.css";

const Input = (props) => {
  const { name, label, errorMsg, type, handleChange, value, placeholder, pattern } = props;
  return (
    <div className="input__container">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} required onChange={handleChange} />
    </div>
  );
};

export default Input;

import { useState } from "react";
import "./input.css";
const Input = ({ name, type, label, handleChange }) => {
  return (
    <div className="input__container">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} required onChange={handleChange} />
    </div>
  );
};

export default Input;

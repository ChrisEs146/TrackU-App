import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./form.css";
import Input from "./input/Input";

const Form = () => {
  // Form's values
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <section className="registration">
      <div className="registration__container">
        <h2 className="registration__title">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form className="registration__form" onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <Input name="fullName" label="Full Name" type="text" handleChange={handleChange} />
            </>
          )}
          <Input name="email" label="Email Address" type="email" handleChange={handleChange} />
          <Input name="password" label="Password" type="password" handleChange={handleChange} />
          {isSignUp && (
            <>
              <Input
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                handleChange={handleChange}
              />
            </>
          )}
          <button className="registration__btn" type="submit">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;

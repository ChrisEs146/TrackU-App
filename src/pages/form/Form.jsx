import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./form.css";
import Input from "./input/Input";

const Form = () => {
  const navigate = useNavigate();

  // State to switch between forms
  const [isSignUp, setIsSignUp] = useState(false);

  // Form's values
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      label: "Full Name",
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
      errorMsg: "It must be a valid email!",
      placeholder: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      label: "Password",
      errorMsg:
        "Password should be 8 - 20 characters. It must include at least 1 letter, 1 number and 1 special character!",
      placeholder: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      errorMsg: "Passwords don't match",
      placeholder: "Confirm Password",
      pattern: values.password,
    },
  ];

  /**
   * Handles input changes in the registration form
   * @param {*} e target element
   */
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  /**
   * Handles the submission of the registration form
   * @param {*} e target element
   */
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /**
   * Handles the switch between the sign in form
   * and sign up form
   */
  const handleSwitch = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <section className="registration">
      <div className="registration__container">
        <h2 className="registration__title">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form className="registration__form" onSubmit={handleSubmit}>
          {isSignUp ? (
            inputs.map((input) => (
              <Input
                key={input.id}
                value={values[input.name]}
                handleChange={handleChange}
                {...input}
              />
            ))
          ) : (
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

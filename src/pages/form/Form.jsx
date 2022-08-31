import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, signInUser } from "../../store/actions/userActions";
import { toast } from "react-toastify";
import "./form.css";
import Input from "./input/Input";

/**
 * Dynamic form component to be used as a sign up or sign in form.
 * Its state changes according to the isSignUp variable, if the
 * variable is true the sign up form is displayed, otherwise the
 * sign in form is shown.
 * @returns Form Component
 */
const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userData, success } = useSelector((state) => state.user);

  // State to switch between forms
  const [isSignUp, setIsSignUp] = useState(false);

  // Initial form fields
  const initialFormState = useMemo(
    () => ({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );

  // Form's values
  const [formData, setFormData] = useState(initialFormState);

  // Form values, used as an array to iterate through them.
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
      pattern: formData.password,
    },
  ];

  useEffect(() => {
    // Checks for possible errors
    if (error) {
      console.error(error);
      toast.error(error);
    }

    // If sign up form is active and the user's data already exists
    if (isSignUp && userData) navigate("/dashboard");

    // If sign up process is successful
    if (isSignUp && success) {
      toast.success("Account Successfully Created");
      setIsSignUp(false);
      setFormData(initialFormState);
      navigate("/registration");
    }

    // If sign in process is successful
    if (!isSignUp && userData) {
      navigate("/dashboard");
    }
  }, [navigate, userData, success, isSignUp, error, initialFormState]);

  /**
   * Handles input changes in the registration form
   * @param {*} e target element
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handles the submission of the registration form
   * @param {*} e target element
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signUpUser(formData));
    } else {
      dispatch(signInUser(formData));
    }
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
                value={formData[input.name]}
                handleChange={handleChange}
                {...input}
              />
            ))
          ) : (
            <>
              <Input
                name="email"
                type="email"
                id="email"
                label="Email Address"
                handleChange={handleChange}
                placeholder="Email"
                value={formData.email}
              />
              <Input
                name="password"
                type="password"
                id="password"
                label="Password"
                handleChange={handleChange}
                placeholder="Password"
                value={formData.password}
              />
            </>
          )}
          <button className="registration__btn" type="submit" disabled={loading}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <button className="registration__switch" onClick={handleSwitch}>
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;

import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSigninMutation, useSignupMutation } from "../../store/slices/ApiSlices/userApiSlice";
import { setUserToken } from "../../store/slices/userSlice";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import FormInput from "../../components/FormInput/FormInput";
import "./form.css";

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
  const [signup, { isLoading: signupLoading }] = useSignupMutation();
  const [signin, { isLoading: signinLoading }] = useSigninMutation();

  // State to switch between forms
  const [isSignUp, setIsSignUp] = useState(false);

  const loading = isSignUp ? signupLoading : signinLoading;

  /**
   * Handles the switch between the sign in form
   * and sign up form
   */
  const handleSwitch = () => {
    setIsSignUp((prevState) => !prevState);
  };

  // Initial form state
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

  /**
   * Handles input changes in the registration form
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form values, used as an array to iterate through them.
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      label: "Full Name",
      icon: <FaUserAlt />,
      errorMsg:
        "Name should be at least 4 characters long and shouldn't include any special character!",
      placeholder: "Full Name",
      pattern: "^[A-Za-z0-9 ]{4,}$",
      minLength: 4,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email Address",
      icon: <FaEnvelope />,
      errorMsg: "It must be a valid email!",
      placeholder: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      label: "Password",
      icon: <FaLock />,
      errorMsg:
        "Password should be 8 - 20 characters. It must include at least 1 letter, 1 number and 1 special character!",
      placeholder: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      minLength: 8,
      maxLength: 20,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      icon: <FaLock />,
      errorMsg: "Passwords don't match",
      placeholder: "Confirm Password",
      pattern: formData.password,
      minLength: 8,
      maxLength: 20,
    },
  ];

  /**
   * Handles the submission of the registration form
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        await signup({ ...formData });
        setFormData(initialFormState);
        handleSwitch();
        navigate("/registration");
      } else {
        const tokenData = await signin({ ...formData }).unwrap();
        dispatch(setUserToken({ ...tokenData }));
        setFormData(initialFormState);
        navigate("/dashboard/projects");
      }
    } catch (error) {
      if (!error?.status) {
        toast.error("Oops, something went wrong!");
      } else {
        toast.error(error?.data?.message);
      }
    }
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <section className="registration">
      <div className="registration__container">
        <h2 className="registration__title">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form className="registration__form" onSubmit={handleSubmit}>
          {isSignUp ? (
            inputs.map((input) => (
              <FormInput
                key={input.id}
                value={formData[input.name]}
                handleChange={handleChange}
                {...input}
              />
            ))
          ) : (
            <>
              <FormInput
                name="email"
                type="email"
                id="email"
                label="Email Address"
                icon={<FaEnvelope />}
                handleChange={handleChange}
                placeholder="Email"
                value={formData.email}
              />
              <FormInput
                name="password"
                type="password"
                id="password"
                label="Password"
                icon={<FaLock />}
                handleChange={handleChange}
                placeholder="Password"
                value={formData.password}
              />
            </>
          )}
          <button className="registration__btn" type="submit" disabled={loading}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <button type="button" className="registration__switch" onClick={handleSwitch}>
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;

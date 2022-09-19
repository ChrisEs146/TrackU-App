import { useState, createContext } from "react";

// Add form context
const AddFormContext = createContext([{ formStatus: null, formHandler: () => {} }]);

/**
 * Add form provider component to share
 * the add form activation state globally.
 * @param {*} props
 * @returns Add Form Provider component
 */
const AddFormProvider = (props) => {
  const [isFormActive, setIsFormActive] = useState(false);

  /**
   * Handler to activate and deactivate the add form component.
   */
  const handleFormActivation = () => setIsFormActive(!isFormActive);

  return (
    <AddFormContext.Provider
      value={{ formStatus: isFormActive, formHandler: handleFormActivation }}
    >
      {props.children}
    </AddFormContext.Provider>
  );
};

export { AddFormProvider, AddFormContext };

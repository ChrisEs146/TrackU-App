import "./formCard.css";

/**
 * FormCard component to be used as a wrapper in forms
 * @param {*} props
 * @returns FormCard wrapper component
 */
const FormCard = (props) => {
  return <div className="formCard__container">{props.children}</div>;
};

export default FormCard;

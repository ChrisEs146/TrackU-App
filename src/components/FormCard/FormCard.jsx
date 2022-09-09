import "./formCard.css";

const FormCard = (props) => {
  return <div className="formCard__container">{props.children}</div>;
};

export default FormCard;

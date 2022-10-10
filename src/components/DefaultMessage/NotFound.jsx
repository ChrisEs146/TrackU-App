import { CgFileAdd } from "react-icons/cg";
import "./notFound.css";

const NotFound = ({ message }) => {
  return (
    <div className="notFound__container">
      <div className="notFound__icon-container">{<CgFileAdd />}</div>
      <p className="notFound__message">{message}</p>
    </div>
  );
};

export default NotFound;

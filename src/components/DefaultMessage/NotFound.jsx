import { CgFileAdd } from "react-icons/cg";
import "./notFound.css";

/**
 * Used when the project's list or the update's list
 * is empty.
 * @param {string} message Message to display in the component.
 * @returns Not-found component
 */
const NotFound = ({ message }) => {
  return (
    <div className="notFound__container">
      <div className="notFound__icon-container">{<CgFileAdd />}</div>
      <p className="notFound__message">{message}</p>
    </div>
  );
};

export default NotFound;

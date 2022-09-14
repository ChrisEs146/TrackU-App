import { FiAlertTriangle } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import "./confirmationModal.css";

/**
 * Confirmation component to ask user if he/she wants
 *  to proceed a update or delete process
 * @param {*} props
 * @returns Confirmation Modal Component
 */
const ConfirmationModal = (props) => {
  return (
    <div className={props.isModalActive ? "modal active" : "modal"}>
      <div className="modal__background"></div>
      <aside className="modal__container">
        <div className="modal__logo" data-action={props.action}>
          {props.action === "delete" ? <FiAlertTriangle /> : <FaRegCheckCircle />}
        </div>
        <h3 className="modal__title">{props.title}</h3>
        <p className="modal__description">{props.description}</p>
        <div className="modal__btns-container">
          <button
            title="Cancel"
            className="modal__cancel-btn"
            onClick={props.handleModalActivation}
          >
            Cancel
          </button>
          <button
            title={props.action === "delete" ? "Delete" : "Confirm"}
            className="modal__action-btn"
            data-action={props.action}
          >
            {props.action === "delete" ? "Delete" : "Confirm"}
          </button>
        </div>
      </aside>
    </div>
  );
};

export default ConfirmationModal;

import { FiAlertTriangle } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import Modal from "../Modal/Modal";
import "./confirmationModal.css";

/**
 * Confirmation component to ask user if he/she wants
 *  to proceed a update or delete process
 * @param {*} props
 * @returns Confirmation Modal Component
 */
const ConfirmationModal = (props) => {
  return (
    <Modal isModalActive={props.isModalActive}>
      <aside className="confirmation">
        <div className="confirmation__logo" data-action={props.action}>
          {props.action === "delete" ? <FiAlertTriangle /> : <FaRegCheckCircle />}
        </div>
        <h3 className="confirmation__title">{props.title}</h3>
        <p className="confirmation__description">{props.description}</p>
        <div className="confirmation__btns-container">
          <button
            title="Cancel"
            className="confirmation__cancel-btn"
            onClick={props.handleModalActivation}
          >
            Cancel
          </button>
          <button
            title={props.action === "delete" ? "Delete" : "Confirm"}
            className="confirmation__action-btn"
            data-action={props.action}
          >
            {props.action === "delete" ? "Delete" : "Confirm"}
          </button>
        </div>
      </aside>
    </Modal>
  );
};

export default ConfirmationModal;

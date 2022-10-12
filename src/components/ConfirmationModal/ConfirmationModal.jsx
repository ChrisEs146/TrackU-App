import { FiAlertTriangle } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { toast } from "react-toastify";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import { useLogOutMutation } from "../../store/slices/ApiSlices/userApiSlice";
import "./confirmationModal.css";

/**
 * Confirmation component to ask user if he/she wants
 *  to proceed a update or delete process
 * @param {*} props
 * @returns Confirmation Modal Component
 */
const ConfirmationModal = (props) => {
  return (
    <Modal isModalActive={isModalActive}>
      <aside className="confirmation">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="confirmation__logo" data-action={item.action}>
              {item.action === "delete" ? <FiAlertTriangle /> : <FaRegCheckCircle />}
            </div>
            <h3 className="confirmation__title">{item.title}</h3>
            <p className="confirmation__description">{item.description}</p>
            <div className="confirmation__btns-container">
              <button
                title="Cancel"
                className="confirmation__cancel-btn"
                onClick={handleModalActivation}
              >
                Cancel
              </button>
              <button
                title={item.action === "delete" ? "Delete" : "Confirm"}
                className="confirmation__action-btn"
                data-action={item.action}
                onClick={submit}
              >
                {item.action === "delete" ? "Delete" : "Confirm"}
              </button>
            </div>
          </>
        )}
      </aside>
    </Modal>
  );
};

export default ConfirmationModal;

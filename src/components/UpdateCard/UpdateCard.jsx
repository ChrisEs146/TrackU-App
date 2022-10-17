import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getItemData } from "../../Utils/ItemData";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { useDeleteUpdateMutation } from "../../store/slices/ApiSlices/updateApiSlice";
import { NavLink } from "react-router-dom";
import "./updateCard.css";

/**
 * Card component that displays the data from an specific project's update.
 * @returns UpdateCard component
 */
const UpdateCard = ({ date, title, description, id, projectId }) => {
  // State and handler to activate and deactivate update options
  const [isOptionsActive, setIsOptionsActive] = useState(false);
  const handleOptionsActive = () => setIsOptionsActive(!isOptionsActive);

  // State and handler to activate and deactivate the confirmation modal
  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const handleConfirmModal = () => setIsConfirmActive(!isConfirmActive);

  const itemData = getItemData("type3", "update");
  const [deleteUpdate, { isSuccess, isError, isLoading, error }] = useDeleteUpdateMutation();

  /**
   * Handler to call the deleteUpdate function
   * from the useDeleteUpdateMutation hook.
   */
  const handleDelete = () => {
    deleteUpdate({ projectId, updateId: id });
  };

  return (
    <>
      <article className="update">
        <div
          className={
            isOptionsActive ? "update__options-container active" : "update__options-container"
          }
        >
          <NavLink
            className="update__options-link"
            to={`/dashboard/projects/edit-update/${projectId}/${id}`}
          >
            <span>Edit</span>
          </NavLink>
          <button
            className="update__options-btn"
            onClick={() => {
              handleOptionsActive();
              handleConfirmModal();
            }}
          >
            Delete
          </button>
        </div>
        <div className="update__date-container">
          <span>{date}</span>
          <button
            title="Show Options"
            aria-label="Button to show update options"
            className="update__btn"
            onClick={handleOptionsActive}
          >
            <BsThreeDotsVertical />
          </button>
        </div>
        <h3 className="update__title">{title}</h3>
        <p className="update__description">{description}</p>
      </article>
      <ConfirmationModal
        item={itemData}
        submit={handleDelete}
        isSuccess={isSuccess}
        isError={isError}
        isLoading={isLoading}
        error={error}
        isModalActive={isConfirmActive}
        handleModalActivation={handleConfirmModal}
      />
    </>
  );
};

export default UpdateCard;

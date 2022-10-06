import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import UpdateCard from "../../../components/UpdateCard/UpdateCard";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import { getShortDate } from "../../../Utils/Functions";
import "./updates.css";

/**
 * Shows a list of updates. Each one can be updated or deleted.
 * @returns Updates component
 */
const Updates = ({ updates }) => {
  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const handleConfirmModal = () => setIsConfirmActive(!isConfirmActive);

  //Delete modal info
  const modalData = {
    title: "WARNING!",
    action: "delete",
    description:
      "You are about to delete this update. Click delete to proceed, otherwise cancel this operation.",
  };

  return (
    <>
      <div className="updates__container">
        <div className="updates__title">
          <h2>Updates</h2>
          <NavLink title="Add Update" className="updates__btn" to="/dashboard/projects/add-update">
            <FaPlus />
            Add Update
          </NavLink>
        </div>
        <div className="updates">
          {updates?.map((update) => (
            <UpdateCard
              date={getShortDate(update?.createdAt)}
              title={update?.title}
              description={update?.description}
              handleModalActivation={handleConfirmModal}
              key={update?._id}
              id={update?._id}
            />
          ))}
        </div>
      </div>
      <ConfirmationModal
        action={modalData.action}
        title={modalData.title}
        description={modalData.description}
        isModalActive={isConfirmActive}
        handleModalActivation={handleConfirmModal}
      />
    </>
  );
};

export default Updates;

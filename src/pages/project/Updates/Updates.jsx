import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import UpdateCard from "../../../components/UpdateCard/UpdateCard";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import NotFound from "../../../components/DefaultMessage/NotFound";
import { getModalData, getShortDate } from "../../../Utils/Functions";
import "./updates.css";

/**
 * Shows a list of updates. Each one can be updated or deleted.
 * @returns Updates component
 */
const Updates = ({ updates }) => {
  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const handleConfirmModal = () => setIsConfirmActive(!isConfirmActive);

  //Delete modal info
  const modalData = getModalData("Update", false, "Delete");

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
          {updates.length ? (
            updates?.map((update) => (
              <UpdateCard
                date={getShortDate(update?.createdAt)}
                title={update?.title}
                description={update?.description}
                handleModalActivation={handleConfirmModal}
                key={update?._id}
                id={update?._id}
              />
            ))
          ) : (
            <NotFound message={"Please, add an update."} />
          )}
        </div>
      </div>
      <ConfirmationModal
        modal={modalData}
        isModalActive={isConfirmActive}
        handleModalActivation={handleConfirmModal}
      />
    </>
  );
};

export default Updates;

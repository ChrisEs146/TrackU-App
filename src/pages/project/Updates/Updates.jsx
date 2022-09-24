import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import UpdateCard from "../../../components/UpdateCard/UpdateCard";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import { getShortDate } from "../../../Utils/Functions";
import "./updates.css";

const Updates = ({ updates }) => {
  const { formStatus, formHandler } = useContext(AddFormContext);
  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const [isUpdateFormActive, setIsUpdateFormActive] = useState(false);
  const handleUpdateFormActivation = () => setIsUpdateFormActive(!isUpdateFormActive);
  const handleConfirmModal = () => setIsConfirmActive(!isConfirmActive);

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
              date={getShortDate(update.date)}
              title={update.title}
              description={update.description}
              handleModalActivation={handleConfirmModal}
              key={update.id}
              id={update.id}
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

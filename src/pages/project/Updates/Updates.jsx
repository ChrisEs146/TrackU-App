import { useContext } from "react";
import { AddFormContext } from "../../../contexts/AddFormContext";
import { FaPlus } from "react-icons/fa";
import UpdateCard from "../../../components/UpdateCard/UpdateCard";
import DynamicForm from "../../../components/DynamicForm/DynamicForm";
import Modal from "../../../components/Modal/Modal";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import { useState } from "react";
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
          <button title="Add Update" className="updates__btn" onClick={formHandler}>
            <FaPlus />
            Add Update
          </button>
        </div>
        <div className="updates">
          {updates?.map((update) => (
            <UpdateCard
              date={update.date}
              title={update.title}
              description={update.description}
              handleConfirmModal={handleConfirmModal}
              handleFormActivation={handleUpdateFormActivation}
              key={update.id}
            />
          ))}
        </div>
      </div>
      {/* Add update form */}
      <Modal isModalActive={formStatus}>
        <DynamicForm type={"Update"} editMode={false} handleModalActivation={formHandler} />
      </Modal>
      {/* Edit update form */}
      <Modal isModalActive={isUpdateFormActive}>
        <DynamicForm
          type={"Update"}
          editMode={true}
          handleModalActivation={handleUpdateFormActivation}
        />
      </Modal>
      {/* Delete Confirmation */}
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

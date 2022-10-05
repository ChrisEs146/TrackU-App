import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./updateCard.css";

/**
 * Card component that displays the data from an specific project's update.
 * @returns UpdateCard component
 */
const UpdateCard = ({ date, title, description, id, handleModalActivation }) => {
  const [isOptionsActive, setIsOptionsActive] = useState(false);
  const handleOptionsActive = () => setIsOptionsActive(!isOptionsActive);

  return (
    <>
      <article className="update">
        <div
          className={
            isOptionsActive ? "update__options-container active" : "update__options-container"
          }
        >
          <NavLink className="update__options-link" to={`/dashboard/projects/edit-update/${id}`}>
            <span>Edit</span>
          </NavLink>
          <button
            className="update__options-btn"
            onClick={() => {
              handleOptionsActive();
              handleModalActivation();
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
    </>
  );
};

export default UpdateCard;

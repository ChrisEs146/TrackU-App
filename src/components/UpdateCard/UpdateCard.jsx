import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./updateCard.css";

const UpdateCard = ({ date, title, description }) => {
  const [isOptionsActive, setIsOptionsActive] = useState(false);

  const handleOptionsActive = () => setIsOptionsActive(!isOptionsActive);

  return (
    <article className="update">
      <div
        className={
          isOptionsActive ? "update__options-container active" : "update__options-container"
        }
      >
        <button className="update__options-btn">Edit</button>
        <button className="update__options-btn">Delete</button>
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
  );
};

export default UpdateCard;

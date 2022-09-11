import "./userCard.css";

/**
 * UserCard component that shows the user's name and profile icon.
 * @param {string} message
 * @param {string} fullName
 * @returns UserCard component
 */
const UserCard = ({ message, fullName }) => {
  return (
    <div className="card__user-info">
      <div title="Username" className="card__avatar-container">
        <div alt="user's avatar" className="card__avatar">
          <span>{fullName.charAt(0).toUpperCase()}</span>
        </div>
      </div>
      {message ? <h3>{`${message} ${fullName.split(" ")[0]}`}</h3> : <h3>{fullName}</h3>}
    </div>
  );
};

export default UserCard;

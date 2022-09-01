import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/slices/user";
import { FaArrowRight, FaSignOutAlt, FaFolderOpen, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import "./sidebar.css";

/**
 * Sidebar menu component that shows the user information
 * and a set of option to interact with the dashboard. The sidebar menu
 * also contains the log out button.
 * @returns Sidebar Menu Component
 */
const Sidebar = ({ handleSidebarState, isSidebarActive }) => {
  const [isOptionActive, setIsOptionActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);

  /**
   * Loggs the user out, and redirects it to the homepage.
   */
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__back">
        <button title="Close menu" aria-label="Button to close menu" className="sidebar__back-btn">
          <FaArrowRight />
        </button>
      </div>
      <div className="sidebar__user-info">
        <div title="Username" className="sidebar__avatar-container">
          <div alt="user's avatar" className="sidebar__avatar">
            <span>{userData?.fullName.charAt(0).toUpperCase()}</span>
          </div>
        </div>
        <h3>Welcome, {userData?.fullName.split(" ")[0]}</h3>
      </div>
      <ul className="sidebar__options-list">
        <li className="sidebar__option">
          <button className="sidebar__option-btn">
            <FaFolderOpen /> Projects
          </button>
        </li>
        <li className="sidebar__option">
          <button className="sidebar__option-btn">
            <FaSpinner /> In Progress
          </button>
        </li>
        <li className="sidebar__option">
          <button className="sidebar__option-btn">
            <FaCheckCircle /> Completed
          </button>
        </li>
        <li className="sidebar__option">
          <button className="sidebar__option-btn">
            <IoSettingsSharp /> Settings
          </button>
        </li>
      </ul>
      <div className="sidebar__logout">
        <button className="sidebar__logout-btn" onClick={handleLogOut}>
          <FaSignOutAlt /> Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

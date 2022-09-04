import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import UserCard from "../UserCard/UserCard";
import { logOut } from "../../store/slices/user";
import { FaArrowRight, FaSignOutAlt, FaFolderOpen } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import "./sidebar.css";

/**
 * Sidebar menu component that shows the user information
 * and a set of option to interact with the dashboard. The sidebar menu
 * also contains the log out button.
 * @returns Sidebar Menu Component
 */
const Sidebar = ({ handleSidebarState, isSidebarActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);

  // Array of sidebar options
  const options = [
    {
      id: 1,
      title: "Projects",
      icon: <FaFolderOpen />,
      path: "/dashboard/projects",
    },
    {
      id: 2,
      title: "Settings",
      icon: <IoSettingsSharp />,
      path: "/dashboard/settings",
    },
  ];

  /**
   * Loggs the user out, and redirects it to the homepage.
   */
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  /**
   * Handler to change the active state of the sidebar's options
   */

  return (
    <div className={isSidebarActive ? "sidebar active" : "sidebar"}>
      <div className="sidebar__back">
        <button
          title="Close menu"
          aria-label="Button to close menu"
          className="sidebar__back-btn"
          onClick={handleSidebarState}
        >
          <FaArrowRight />
        </button>
      </div>
      <UserCard message={"Welcome, "} fullName={userData.fullName} />
      <ul className="sidebar__options-list">
        {options.map((option) => {
          return (
            <li className="sidebar__option" key={option.id}>
              <NavLink
                title={option.title}
                className="sidebar__option-link"
                to={option.path}
                onClick={handleSidebarState}
              >
                <span>
                  {option.icon}
                  {option.title}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="sidebar__logout">
        <button className="sidebar__logout-btn" onClick={handleLogOut}>
          <FaSignOutAlt /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

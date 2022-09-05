import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import UserCard from "../UserCard/UserCard";
import { logOut } from "../../store/slices/user";
import {
  FaArrowRight,
  FaSignOutAlt,
  FaFolderOpen,
  FaUserEdit,
  FaUserLock,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineUserDelete } from "react-icons/ai";
import "./sidebar.css";
import { useState } from "react";

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
  const [areSettingsOpen, setAreSettingsOpen] = useState(false);

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
      icon2: <FaAngleDown />,
      icon3: <FaAngleUp />,
      path: "/dashboard/settings",
      subNav: [
        {
          id: 2.1,
          title: "Update Account",
          icon: <FaUserEdit />,
          path: "/dashboard/settings/update-user",
        },
        {
          id: 2.2,
          title: "Change Password",
          icon: <FaUserLock />,
          path: "/dashboard/settings/change-password",
        },
        {
          id: 2.3,
          title: "Delete Account",
          icon: <AiOutlineUserDelete />,
          path: "/dashboard/settings/delete-user",
        },
      ],
    },
  ];

  const handleSettingsState = () => setAreSettingsOpen(!areSettingsOpen);

  /**
   * Loggs the user out, and redirects it to the homepage.
   */
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

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
            <li className="sidebar__option">
              <NavLink
                title={option.title}
                className="sidebar__option-link"
                to={option.path}
                onClick={option.id === 1 ? handleSidebarState : handleSettingsState}
              >
                <span>
                  {option.icon}
                  {option.title}
                  {areSettingsOpen ? option.icon3 : option.icon2}
                </span>
              </NavLink>
              {option.subNav &&
                option.subNav.map((item) => {
                  return (
                    <NavLink
                      title={item.title}
                      key={item.id}
                      className={
                        areSettingsOpen ? "sidebar__option-subnav active" : "sidebar__option-subnav"
                      }
                      to={item.path}
                      onClick={handleSidebarState}
                    >
                      <span>
                        {item.icon}
                        {item.title}
                      </span>
                    </NavLink>
                  );
                })}
            </li>
          );
        })}
      </ul>
      <div className="sidebar__logout">
        <button
          className="sidebar__logout-btn"
          onClick={() => {
            handleLogOut();
            handleSidebarState();
          }}
        >
          <FaSignOutAlt /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

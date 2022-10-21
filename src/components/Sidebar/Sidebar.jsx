import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import UserCard from "../UserCard/UserCard";
import { useLogOutMutation } from "../../store/slices/ApiSlices/userApiSlice";
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

/**
 * Sidebar menu component that shows the user information
 * and a set of option to interact with the dashboard. The sidebar menu
 * also contains the log out button.
 * @returns Sidebar Menu Component
 */
const Sidebar = ({ handleSidebarState, isSidebarActive, fullName }) => {
  const navigate = useNavigate();
  const [areSettingsOpen, setAreSettingsOpen] = useState(false);
  const [logOut, { isSuccess }] = useLogOutMutation();

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

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      return;
    }
  }, [isSuccess]);

  /**
   *  Handler to activate and deactivate the settings subnavigation
   */
  const handleSettingsState = () => setAreSettingsOpen(!areSettingsOpen);

  return (
    <div className={isSidebarActive ? "container active" : "container"}>
      <div className="sidebar__background"></div>
      <aside className="sidebar">
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
        <UserCard message={"Welcome, "} fullName={fullName} />
        <ul className="sidebar__options-list">
          {options.map((option) => {
            return (
              <li
                className={
                  option.id === 2 && areSettingsOpen
                    ? "sidebar__option subActive"
                    : "sidebar__option"
                }
                key={option.id}
              >
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
                        className="sidebar__option-subnav"
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
              logOut();
              handleSidebarState();
            }}
          >
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

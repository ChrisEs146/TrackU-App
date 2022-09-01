import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../store/actions/userActions";
import logo from "../../images/logo.png";
import { FaBars } from "react-icons/fa";
import "./nav.css";

/**
 * Navigation component that shows the sign in button or
 * the user profile in case the user exists.
 * @returns Navigation Component
 */
const Nav = ({ handleSidebarState }) => {
  const { userData, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Fetches user's info on reload
  useEffect(() => {
    if (userToken) {
      dispatch(getUserInfo());
    }
  }, [userToken, dispatch]);

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={logo} alt="TrackU logo" title="TrackU" />
      </div>
      {!userData ? (
        <NavLink className="navigation__btn" to="/registration">
          Sign In
        </NavLink>
      ) : (
        <>
          <button
            title="Sidebar menu"
            aria-label="Button to open menu"
            className="navigation__menu-btn"
            onClick={handleSidebarState}
          >
            <FaBars />
          </button>
          <button title="Add Project" className="navigation__add-btn">
            <FaPlus /> Add Project
          </button>
        </>
      )}
    </nav>
  );
};

export default Nav;

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";
import "./nav.css";

/**
 * Navigation component that shows the sign in button or
 * the user profile in case the user exists.
 * @returns Navigation Component
 */
const Nav = () => {
  const { userData } = useSelector((state) => state.user);
  const { sidebarHandler } = useContext(SidebarContext);

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={logo} alt="TrackU logo" title="TrackU" />
        <p>TrackU</p>
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
            onClick={sidebarHandler}
          >
            <FaBars />
          </button>
        </>
      )}
    </nav>
  );
};

export default Nav;

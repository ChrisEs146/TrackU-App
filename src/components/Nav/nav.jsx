import { NavLink } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../store/actions/userActions";
import { SidebarContext } from "../../contexts/SidebarContext";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";
import "./nav.css";

/**
 * Navigation component that shows the sign in button or
 * the user profile in case the user exists.
 * @returns Navigation Component
 */
const Nav = () => {
  const { userData, userToken } = useSelector((state) => state.user);
  const { sidebarHandler } = useContext(SidebarContext);
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

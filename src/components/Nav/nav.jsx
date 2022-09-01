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
const Nav = () => {
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
        <div title="Username" className="navigation__avatar-container">
          <div alt="user's avatar" className="navigation__avatar">
            <span>{userData.fullName.charAt(0).toUpperCase()}</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

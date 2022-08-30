import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";
import "./nav.css";
const Nav = () => {
  const { userData } = useSelector((state) => state.user);

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

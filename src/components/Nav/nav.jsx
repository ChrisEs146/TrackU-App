import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./nav.css";
const Nav = ({ user }) => {
  const navigate = useNavigate();
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={logo} alt="TrackU logo" title="TrackU" />
      </div>
      {!user ? (
        <button className="navigation__btn" onClick={() => navigate("/registration")}>
          Sign In
        </button>
      ) : (
        <div title="User name" className="navigation__avatar-container">
          <img src={logo} alt="user's avatar" className="navigation__avatar" />
        </div>
      )}
    </nav>
  );
};

export default Nav;

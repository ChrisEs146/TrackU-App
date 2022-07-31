import "./nav.css";
import logo from "../../images/logo.png";
import "./nav.css";
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={logo} alt="TrackU logo" title="TrackU" />
      </div>
      <button className="navigation__btn">Log In</button>
    </nav>
  );
};

export default Nav;

import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import hero from "../../images/hero.svg";
import "./homepage.css";
import { useEffect } from "react";

/**
 * Homepage allows users to sign in or sign up to have
 * access to TrakU dashboard.
 * @returns Homepage Component
 */
const Homepage = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/dashboard/projects");
    }
  }, [userData, navigate]);

  return (
    <header className="homepage">
      <div className="homepage__hero-container">
        <div className="homepage__information">
          <h1 className="homepage__title">Keep track of your projects</h1>
          <p className="homepage__text">
            <span>TrackU</span> gives you an environment where you can create, manage and keep your
            personal projects updated until completion. Makes your managing process easier.
          </p>
          <NavLink className="homepage__btn" to="/registration">
            Start Now
          </NavLink>
        </div>
        <div className="homepage__image-container">
          <img
            src={hero}
            alt="Illustration of a man with documents around him"
            className="homepage__image"
          />
        </div>
      </div>
    </header>
  );
};

export default Homepage;

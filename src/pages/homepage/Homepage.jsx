import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import hero from "../../images/hero.svg";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import "./homepage.css";
import { getFromLocalStorage } from "../../Utils/Functions";

/**
 * Homepage allows users to sign in or sign up to have
 * access to TrackU dashboard.
 * @returns Homepage Component
 */
const Homepage = () => {
  useDocumentTitle("Home");
  const navigate = useNavigate();

  useEffect(() => {
    let isUser = getFromLocalStorage("User");
    if (isUser && isUser !== null) {
      return navigate("/dashboard/projects");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <header className="homepage">
      <div className="homepage__hero-container">
        <div className="homepage__information">
          <h1 className="homepage__title">Keep track of your projects</h1>
          <p className="homepage__text">
            <span>TrackU</span> gives you an environment where you can create, manage and keep your
            personal projects updated until completion. Makes your management process easier.
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

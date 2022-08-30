import hero from "../../images/hero.svg";
import { NavLink } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
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

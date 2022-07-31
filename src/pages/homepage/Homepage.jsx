import Nav from "../../components/Nav/nav";
import hero from "../../images/hero.svg";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
const Homepage = () => {
  return (
    <header className="homepage">
      <Nav />
      <div className="homepage__hero-container">
        <div className="homepage__information">
          <h1 className="homepage__title">Keep track of your projects</h1>
          <p className="homepage__text">
            <span>TrackU</span> gives you an environment where you can create, manage and keep your
            personal projects updated until completion. Makes your managing process easier.
          </p>
          <button className="homepage__btn">Start Now</button>
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

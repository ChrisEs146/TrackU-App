import { FaPlus } from "react-icons/fa";
import "./projects.css";
const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <button title="Add Project" aria-label="Button to add project" className="projects__add-btn">
        <FaPlus />
      </button>
    </div>
  );
};

export default Projects;

import { FaPlus } from "react-icons/fa";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./projects.css";
const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__title-container">
        <h2>Projects</h2>
        <button
          title="Add Project"
          aria-label="Button to add project"
          className="projects__add-btn"
        >
          <FaPlus />
        </button>
      </div>
      <div className="projects__container">
        <div className="projects__headers">
          <div className="projects__headers-info">
            <span>Title</span>
            <span>Added</span>
          </div>
          <div className="projects__headers-progress">
            <span>Status</span>
            <span>Progress</span>
          </div>
        </div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;

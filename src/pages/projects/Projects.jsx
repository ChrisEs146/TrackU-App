import { FaPlus } from "react-icons/fa";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./projects.css";
const Projects = () => {
  const proj1 = {
    id: 1,
    title: "Angular Web Application",
    date: new Date(),
    status: "In Progress",
    progress: 55,
  };

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
        <ProjectCard project={proj1} />
      </div>
    </section>
  );
};

export default Projects;

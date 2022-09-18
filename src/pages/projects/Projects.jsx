import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddForm from "../../components/AddForm/AddForm";
import Modal from "../../components/Modal/Modal";
import "./projects.css";

/**
 * Projects page component that displays a list
 * of projects (ProjectCard component).
 * @returns Projects page component
 */
const Projects = () => {
  const [isFormActive, setIsFormActive] = useState(false);

  /**
   * Handler to change the form's state. If active, it's
   * display as a modal, otherwise it's hidden.
   */
  const handleFormActivation = () => setIsFormActive(!isFormActive);
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
          onClick={handleFormActivation}
        >
          <FaPlus />
        </button>
      </div>
      <div className="projects__container">
        <ProjectCard project={proj1} />
      </div>
      <Modal isModalActive={isFormActive}>
        <AddForm type={"Project"} handleModalActivation={handleFormActivation} />
      </Modal>
    </section>
  );
};

export default Projects;

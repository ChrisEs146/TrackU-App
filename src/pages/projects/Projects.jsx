import { FaPlus } from "react-icons/fa";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import AddForm from "../../components/AddForm/AddForm";
import Modal from "../../components/Modal/Modal";
import "./projects.css";
import { useContext } from "react";
import { AddFormContext } from "../../contexts/AddFormContext";

/**
 * Projects page component that displays a list
 * of projects (ProjectCard component).
 * @returns Projects page component
 */
const Projects = () => {
  const { formStatus, formHandler } = useContext(AddFormContext);
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
          onClick={formHandler}
        >
          <FaPlus />
        </button>
      </div>
      <div className="projects__container">
        <ProjectCard project={proj1} />
      </div>
      <Modal isModalActive={formStatus}>
        <DynamicForm type={"Project"} editMode={false} handleModalActivation={formHandler} />
      </Modal>
    </section>
  );
};

export default Projects;

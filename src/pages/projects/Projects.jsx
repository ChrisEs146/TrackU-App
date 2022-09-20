import { FaPlus } from "react-icons/fa";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
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
  const date = new Date();

  const mockData = [
    {
      id: 1,
      title: "Angular Web Application",
      date,
      status: "In Progress",
      progress: 55,
    },
    {
      id: 2,
      title: "ASP.NET CORE WEB API",
      date,
      status: "Not Started",
      progress: 0,
    },
    {
      id: 3,
      title: "DRF Rest API",
      date,
      status: "Completed",
      progress: 100,
    },
  ];

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
        {mockData?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Modal isModalActive={formStatus}>
        <DynamicForm type={"Project"} editMode={false} handleModalActivation={formHandler} />
      </Modal>
    </section>
  );
};

export default Projects;

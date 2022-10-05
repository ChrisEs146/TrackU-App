import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useGetAllProjectsQuery } from "../../store/slices/ApiSlices/projectApiSlice";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import "./projectList.css";

/**
 * Component that shows a user's project list. If there are no
 * projects it shows a "Please, add a project" message.
 * @returns ProjectList component
 */
const ProjectList = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery();
  return (
    <div className="projectList">
      <div className="projectList__title-container">
        <h2>Projects</h2>
        <NavLink
          title="Add Project"
          aria-label="Button to add project"
          className="projectList__add-btn"
          to="/dashboard/projects/add-project"
        >
          <FaPlus />
        </NavLink>
      </div>
      <div className="projectList__container">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          projects?.map((project) => <ProjectCard key={project._id} project={project} />)
        )}
      </div>
    </div>
  );
};

export default ProjectList;

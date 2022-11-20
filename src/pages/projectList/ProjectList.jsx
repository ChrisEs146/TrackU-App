import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useGetAllProjectsQuery } from "../../store/slices/ApiSlices/projectApiSlice";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import NotFound from "../../components/DefaultMessage/NotFound";
import Pagination from "../../components/Pagination/Pagination";
import "./projectList.css";
import { getFromLocalStorage } from "../../Utils/Functions";

/**
 * Component that shows a user's project list. If there are no
 * projects it shows a "Please, add a project" message.
 * @returns ProjectList component
 */
const ProjectList = () => {
  const { data, isLoading } = useGetAllProjectsQuery();
  const [offSet, setOffSet] = useState(Number(getFromLocalStorage("ProjectOffset", false)) || 0);
  const [currentPage, setCurrentPage] = useState(
    Number(getFromLocalStorage("ProjectPage", false)) || 0
  );
  const resultsPerPage = 5;
  const arrayOffset = offSet + resultsPerPage;
  const projects = data?.slice(offSet, arrayOffset);

  console.log(`In Projects ${currentPage}`);
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
        ) : !data.length ? (
          <div className="projectList__notFound-container">
            <NotFound message={"Please, add a project."} />
          </div>
        ) : (
          <>
            <div className="projectList__items">
              {projects?.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
            {data?.length > resultsPerPage && (
              <Pagination
                itemsPerPage={resultsPerPage}
                totalItems={data?.length}
                setOffSet={setOffSet}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                componentKey="Project"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectList;

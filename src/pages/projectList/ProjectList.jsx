import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useGetAllProjectsQuery } from "../../store/slices/ApiSlices/projectApiSlice";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import NotFound from "../../components/DefaultMessage/NotFound";
import Pagination from "../../components/Pagination/Pagination";
import { getFromLocalStorage } from "../../Utils/Functions";
import usePaginate from "../../hooks/usePaginate";
import "./projectList.css";

/**
 * Component that shows a user's project list. If there are no
 * projects it shows a "Please, add a project" message.
 * @returns ProjectList component
 */
const ProjectList = () => {
  const { data, isLoading } = useGetAllProjectsQuery();
  const [currentPage, setCurrentPage] = useState(Number(getFromLocalStorage("ProjectPage")) || 0);
  const resultsPerPage = 5;
  const [pageCount, page, projects] = usePaginate(data, resultsPerPage, currentPage);

  return (
    <>
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
            <NotFound message={"Add a project."} />
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
                currentPage={page}
                pageCount={pageCount}
                componentKey={"Project"}
                setCurrentPage={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProjectList;

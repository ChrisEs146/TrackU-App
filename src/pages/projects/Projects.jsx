import { Outlet } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";

/**
 * Projects page component that displays a list
 * of projects (ProjectCard component).
 * @returns Projects page component
 */
const Projects = () => {
  useDocumentTitle("Projects");
  return (
    <>
      <Outlet />
    </>
  );
};

export default Projects;

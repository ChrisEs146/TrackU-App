import { Outlet } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import "./projects.css";

/**
 * Projects page component that displays a list
 * of projects (ProjectCard component).
 * @returns Projects page component
 */
const Projects = () => {
  useDocumentTitle("Projects");
  return (
    <section className="projects">
      <Outlet />
    </section>
  );
};

export default Projects;

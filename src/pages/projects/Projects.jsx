import { Outlet } from "react-router-dom";
import "./projects.css";

/**
 * Projects page component that displays a list
 * of projects (ProjectCard component).
 * @returns Projects page component
 */
const Projects = () => {
  return (
    <section className="projects">
      <Outlet />
    </section>
  );
};

export default Projects;

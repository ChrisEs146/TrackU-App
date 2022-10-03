import { NavLink } from "react-router-dom";
import { getProgressColor } from "../../Utils/Functions";
import DateCard from "../DateItem/DateCard";
import "./projectCard.css";

/**
 * ProjectCard component that shows the date, title,
 * project status and project progres (in percentage).
 * @param {*} project
 * @returns ProjectCard component
 */
const ProjectCard = ({ project }) => {
  const currentColor = getProgressColor(project.progress);
  return (
    <NavLink
      to={`/dashboard/projects/${project._id}`}
      className="project"
      style={{ borderLeft: `4px solid ${currentColor}` }}
    >
      <div className="project__info">
        <h3>{project.title}</h3>
        <DateCard date={project.createdAt} />
      </div>
      <div className="project__status-container">
        <div className="project__status">
          <span className="project__item-header">Status</span>
          <span style={{ backgroundColor: `${currentColor}` }} className="project__status-value">
            {project.status}
          </span>
        </div>
        <div className="project__progress">
          <span className="project__item-header">Progress</span>
          <span className="project__progress-percent" style={{ color: `${currentColor}` }}>
            {project.progress}%
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ProjectCard;

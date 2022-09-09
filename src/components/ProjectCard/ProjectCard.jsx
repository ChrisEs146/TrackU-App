import { NavLink } from "react-router-dom";
import DateCard from "../DateItem/DateCard";
import "./projectCard.css";

const ProjectCard = ({ project }) => {
  const progressColor = (value) => {
    if (value >= 80 && value <= 100) {
      return "#3EC70B";
    } else if (value >= 40 && value < 80) {
      return "#3120E0";
    }
    return "#c21010";
  };

  return (
    <NavLink to={`/dashboard/project/${project.id}`} className="project">
      <div className="project__info">
        <h3>{project.title}</h3>
        <DateCard date={project.date} />
      </div>
      <div className="project__status-container">
        <div className="project__status">
          <span className="project__item-header">Status</span>
          <span className="project__status-value">{project.status}</span>
        </div>
        <div className="project__progress">
          <span className="project__item-header">Progress</span>
          <span
            className="project__progress-percent"
            style={{ color: `${progressColor(project.progress)}` }}
          >
            {project.progress}%
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ProjectCard;

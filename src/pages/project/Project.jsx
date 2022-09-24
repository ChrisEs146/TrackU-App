import { NavLink, useParams } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { FaEdit, FaCalendarDay, FaQuestionCircle } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getProgressColor } from "../../Utils/Functions";
import Updates from "./Updates/Updates";
import { mockData } from "../projectList/ProjectList";
import { getShortDate } from "../../Utils/Functions";
import "./project.css";

const Project = () => {
  const { projectId } = useParams();

  const project = mockData.find((proj) => proj.projectId === Number(projectId));

  const currentColor = getProgressColor(project.progress);
  const progressStyles = buildStyles({
    pathColor: `${currentColor}`,
    trailColor: "#CFD2CF",
    strokeLinecap: "round",
  });

  return (
    <section className="projectPage">
      <div className="projectPage__main-content">
        <div className="projectPage__btns-container">
          <NavLink title="Go back" className="projectPage__back-link" to="/dashboard/projects">
            <span>
              <AiOutlineArrowLeft />
              Back
            </span>
          </NavLink>
          <NavLink
            title="Edit Project"
            aria-label="Project edit button"
            className="projectPage__edit-btn"
            to={`/dashboard/projects/edit-project/${project.projectId}`}
          >
            <FaEdit />
          </NavLink>
        </div>
        <h2 className="projectPage__title">{project.title}</h2>
        <div className="projectPage__status-container">
          <div className="projectPage__added">
            <span className="projectPage__status-label">
              <FaCalendarDay /> Added:
            </span>
            <span>{getShortDate(project.date)}</span>
          </div>
          <div className="projectPage__status">
            <span className="projectPage__status-label">
              <FaQuestionCircle /> Status:
            </span>
            <span>{project.status}</span>
          </div>
        </div>
        <div className="projectPage__info">
          <div className="projectPage__description">
            <p>{project.description}</p>
          </div>
          <div className="projectPage__progress-container">
            <CircularProgressbarWithChildren value={project.progress} styles={progressStyles}>
              <div className="projectPage__progress-text" style={{ color: currentColor }}>
                <span>{project.progress}%</span>
                <span>Completed</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      <Updates updates={project.updates} />
    </section>
  );
};

export default Project;

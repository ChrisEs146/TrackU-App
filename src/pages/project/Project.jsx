import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { FaCalendarDay, FaQuestionCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getProgressColor } from "../../Utils/Functions";
import Updates from "./Updates/Updates";
import { getShortDate } from "../../Utils/Functions";
import { useDeleteProjectMutation } from "../../store/slices/ApiSlices/projectApiSlice";
import { useGetProjectQuery } from "../../store/slices/ApiSlices/projectApiSlice";
import { useGetUpdatesQuery } from "../../store/slices/ApiSlices/updateApiSlice";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import { getItemData } from "../../Utils/ItemData";
import "./project.css";

/**
 * Shows a projects information including, date, status, progress,
 * description and updates.
 * @returns Project component
 */
const Project = () => {
  const { projectId } = useParams();
  const { data: project, isLoading, isSuccess, isError } = useGetProjectQuery(projectId);
  const { data: updates } = useGetUpdatesQuery(projectId);

  //Setting a status color based on project's progress
  const currentColor = getProgressColor(project?.progress);
  const progressStyles = buildStyles({
    pathColor: `${currentColor}`,
    trailColor: "#CFD2CF",
    strokeLinecap: "round",
  });

  let content;
  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (isSuccess) {
    content = (
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
              to={`/dashboard/projects/edit-project/${project?._id}`}
            >
              <FaEdit />
            </NavLink>
          </div>
          <h2 className="projectPage__title">{project?.title}</h2>
          <div className="projectPage__status-container">
            <div className="projectPage__added">
              <span className="projectPage__status-label">
                <FaCalendarDay /> Added:
              </span>
              <span>{getShortDate(project?.createdAt)}</span>
            </div>
            <div className="projectPage__status">
              <span className="projectPage__status-label">
                <FaQuestionCircle /> Status:
              </span>
              <span>{project?.status}</span>
            </div>
          </div>
          <div className="projectPage__info">
            <div className="projectPage__description">
              <p>{project?.description}</p>
            </div>
            <div className="projectPage__progress-container">
              <CircularProgressbarWithChildren value={project?.progress} styles={progressStyles}>
                <div className="projectPage__progress-text" style={{ color: currentColor }}>
                  <span>{project?.progress}%</span>
                  <span>Completed</span>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
        <Updates updates={updates} />
      </section>
    );
  }

  return content;
};

export default Project;

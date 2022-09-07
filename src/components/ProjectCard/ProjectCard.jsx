import "./projectCard.css";

const ProjectCard = () => {
  const currentDate = new Date();
  const testDate = currentDate.toLocaleDateString("default", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const progressColor = (value) => {
    if (value >= 80 && value <= 100) {
      return "#3EC70B";
    } else if (value >= 40 && value < 80) {
      return "#3120E0";
    }
    return "#c21010";
  };
  return (
    <div className="project">
      <div className="project__info">
        <h3>Angular Web Application</h3>
        <span>{testDate}</span>
      </div>
      <div className="project__status-container">
        <div className="project__status">
          <span>Status</span>
          <span className="project__status-value">In Progress</span>
        </div>
        <div className="project__progress">
          <span>Progress</span>
          <span className="project__progress-percent">20%</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

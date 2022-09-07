import "./projectCard.css";

const ProjectCard = () => {
  const currentDate = new Date();

  const testDate = currentDate.toLocaleDateString("default", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const proj1 = {
    title: "Angular Web Application",
    date: testDate,
    status: "In Progress",
    progress: 55,
  };

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
        <h3>{proj1.title}</h3>
        <span>{proj1.date}</span>
      </div>
      <div className="project__status-container">
        <div className="project__status">
          <span className="project__item-header">Status</span>
          <span className="project__status-value">{proj1.status}</span>
        </div>
        <div className="project__progress">
          <span className="project__item-header">Progress</span>
          <span
            className="project__progress-percent"
            style={{ color: `${progressColor(proj1.progress)}` }}
          >
            {proj1.progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

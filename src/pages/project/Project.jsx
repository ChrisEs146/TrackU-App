import { NavLink, useParams } from "react-router-dom";
import "./project.css";

const Project = () => {
  const { projectId } = useParams();
  return (
    <div>
      <p>PROJECT PAGE {projectId}</p>
      <NavLink to="/dashboard/projects">Back</NavLink>
    </div>
  );
};

export default Project;

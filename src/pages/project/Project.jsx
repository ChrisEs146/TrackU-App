import { NavLink } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { FaEdit, FaCalendarDay, FaQuestionCircle, FaPlus } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import UpdateCard from "../../components/UpdateCard/UpdateCard";
import { progressColor } from "../../Utils/Functions";
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

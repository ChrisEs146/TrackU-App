import { NavLink } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { FaEdit, FaCalendarDay, FaQuestionCircle, FaPlus } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import UpdateCard from "../../components/UpdateCard/UpdateCard";
import { progressColor } from "../../Utils/Functions";
import "./project.css";

const Project = () => {
  const percentage = 55;
  const currentColor = progressColor(percentage);

  const progressStyles = buildStyles({
    pathColor: { currentColor },
    trailColor: "#CFD2CF",
    strokeLinecap: "round",
  });

  const date = new Date().toLocaleDateString("default", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  const title = "Navigation is ready to go";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates est totam facere! Nostrum dolor explicabo, obcaecati a culpa magni fugit nisi voluptas eos ad iure maiores vero? Omnis consequuntur at vero suscipit repellat modi, dolorem voluptatum quae alias officia, temporibus voluptatibus quaerat amet nulla sapiente laudantium, impedit rem illo laborum iste magni aut. Tenetur similique quia, distinctio cupiditate nihil, odio quaerat perferendis excepturi praesentium voluptas nostrum harum molestiae provident quisquam id, laudantium quo maxime sed. Quam, vero et. Ipsa, saepe! Expedita dicta quis itaque repudiandae consequuntur modi dolor non voluptas? Quam dicta doloribus corporis, unde doloremque provident possimus quae accusantium!";
  const title2 = "Issues with modals";
  const description2 =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum numquam sit iure ut perferendis exercitationem repellat ea esse labore consectetur?";
  const title3 = "Hero section finished";
  const description3 =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, repellat?";

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
          <button
            title="Edit Project"
            aria-label="Project edit button"
            className="projectPage__edit-btn"
          >
            <FaEdit />
          </button>
        </div>
  );
};

export default Project;

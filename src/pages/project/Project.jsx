import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { FaEdit, FaCalendarDay, FaQuestionCircle, FaPlus } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { progressColor } from "../../Utils/Functions";
import UpdateCard from "../../components/UpdateCard/UpdateCard";
import Modal from "../../components/Modal/Modal";
import AddForm from "../../components/AddForm/AddForm";
import "./project.css";
import { AddFormContext } from "../../contexts/AddFormContext";

const Project = () => {
  const { formStatus, formHandler } = useContext(AddFormContext);
  const date = new Date().toLocaleString("default", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const mockData = {
    id: 3,
    title: "DRF Rest API",
    date,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit recusandae soluta voluptas quas nulla facere repellat velit molestiae fuga similique!",
    status: "Completed",
    progress: 100,
    updates: [
      { id: 3.1, title: "Endpoint Issues", description: "Test description", date },
      { id: 3.2, title: "Rate limiting finished", description: "Another test description", date },
      { id: 3.3, title: "Project Completed", description: "Another test description", date },
    ],
  };

  const currentColor = progressColor(mockData.progress);
  const progressStyles = buildStyles({
    pathColor: `${currentColor}`,
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
        <h2 className="projectPage__title">{mockData.title}</h2>
        <div className="projectPage__status-container">
          <div className="projectPage__added">
            <span className="projectPage__status-label">
              <FaCalendarDay /> Added:
            </span>
            <span>{mockData.date}</span>
          </div>
          <div className="projectPage__status">
            <span className="projectPage__status-label">
              <FaQuestionCircle /> Status:
            </span>
            <span>{mockData.status}</span>
          </div>
        </div>
        <div className="projectPage__info">
          <div className="projectPage__description">
            <p>{mockData.description}</p>
          </div>
          <div className="projectPage__progress-container">
            <CircularProgressbarWithChildren value={mockData.progress} styles={progressStyles}>
              <div className="projectPage__progress-text" style={{ color: currentColor }}>
                <span>{mockData.progress}%</span>
                <span>Completed</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      <div className="projectPage__updates-container">
        <div className="projectPage__updates-title">
          <h2>Updates</h2>
          <button title="Add Update" className="projectPage__updates-btn" onClick={formHandler}>
            <FaPlus />
            Add Update
          </button>
        </div>
        <div className="projectPage__updates">
          <UpdateCard date={date} title={title} description={description} />
          <UpdateCard date={date} title={title2} description={description2} />
          <UpdateCard date={date} title={title3} description={description3} />
          <UpdateCard date={date} title={title3} description={description3} />
        </div>
      </div>
      <Modal isModalActive={formStatus}>
        <AddForm type={"Update"} handleModalActivation={formHandler} />
      </Modal>
    </section>
  );
};

export default Project;

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
        <h2 className="projectPage__title">Mock Title</h2>
        <div className="projectPage__status-container">
          <div className="projectPage__added">
            <span className="projectPage__status-label">
              <FaCalendarDay /> Added:
            </span>
            <span> 02/12/2022</span>
          </div>
          <div className="projectPage__status">
            <span className="projectPage__status-label">
              <FaQuestionCircle /> Status:
            </span>
            <span> In Progress</span>
          </div>
        </div>
        <div className="projectPage__info">
          <div className="projectPage__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus ea
              incidunt. Eum placeat voluptate dolores, quas debitis perspiciatis harum saepe minus!
              Vitae ut est, dignissimos minus aliquid fuga asperiores beatae, ea facilis sint ipsa,
              earum cupiditate. Dolor molestias quaerat reprehenderit velit laboriosam? Maiores
              sapiente esse minus quae. Optio voluptas, officiis quo, ipsa non recusandae maxime
              dolorum dolor ipsam assumenda aliquid sunt voluptatum harum vel, excepturi accusantium
              consequatur veniam facere eveniet inventore reprehenderit aliquam esse. Odio qui vel
              vitae, repudiandae maxime praesentium tempore pariatur doloribus, temporibus explicabo
              porro adipisci in recusandae voluptates mollitia veritatis ipsa. In nesciunt commodi
              molestiae explicabo.
            </p>
          </div>
          <div className="projectPage__progress-container">
            <CircularProgressbarWithChildren value={percentage} styles={progressStyles}>
              <div className="projectPage__progress-text" style={{ color: currentColor }}>
                <span>{percentage}%</span>
                <span>Completed</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      <div className="projectPage__updates-container">
        <div className="projectPage__updates-title">
          <h2>Updates</h2>
          <button className="projectPage__updates-btn">
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
    </section>
  );
};

export default Project;

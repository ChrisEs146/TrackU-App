import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import UpdateCard from "../../../components/UpdateCard/UpdateCard";
import NotFound from "../../../components/DefaultMessage/NotFound";
import { getShortDate } from "../../../Utils/Functions";
import "./updates.css";

/**
 * Shows a list of updates. Each one can be updated or deleted.
 * @returns Updates component
 */
const Updates = ({ updates, projectId }) => {
  return (
    <>
      <div className="updates__container">
        <div className="updates__title">
          <h2>Updates</h2>
          <NavLink
            title="Add Update"
            className="updates__btn"
            to={`/dashboard/projects/add-update/${projectId}`}
          >
            <FaPlus />
            Add Update
          </NavLink>
        </div>
        <div className="updates">
          {updates?.length ? (
            updates?.map((update) => (
              <UpdateCard
                date={getShortDate(update?.createdAt)}
                title={update?.title}
                description={update?.description}
                projectId={projectId}
                key={update?._id}
                id={update?._id}
              />
            ))
          ) : (
            <div className="updates__notFound-container">
              <NotFound message={"Please, add an update."} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Updates;

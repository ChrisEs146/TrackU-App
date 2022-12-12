import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import UpdateCard from "../../../components/UpdateCard/UpdateCard";
import NotFound from "../../../components/DefaultMessage/NotFound";
import { getFromLocalStorage, getShortDate } from "../../../Utils/Functions";
import Pagination from "../../../components/Pagination/Pagination";
import "./updates.css";
import usePaginate from "../../../hooks/usePaginate";

/**
 * Shows a list of updates. Each one can be updated or deleted.
 * @returns Updates component
 */
const Updates = ({ updates, projectId }) => {
  const [currentPage, setCurrentPage] = useState(Number(getFromLocalStorage("UpdatePage")) || 0);
  const resultsPerPage = 5;
  const [pageCount, page, currentUpdates] = usePaginate(updates, resultsPerPage, currentPage);
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
            <>
              <div className="updates__items">
                {currentUpdates?.map((update) => (
                  <UpdateCard
                    date={getShortDate(update?.createdAt)}
                    title={update?.title}
                    description={update?.description}
                    projectId={projectId}
                    key={update?._id}
                    id={update?._id}
                  />
                ))}
              </div>
              {updates?.length > resultsPerPage && (
                <Pagination
                  currentPage={page}
                  pageCount={pageCount}
                  componentKey={"Update"}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </>
          ) : (
            <div className="updates__notFound-container">
              <NotFound message={"Add an update."} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Updates;

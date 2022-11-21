import NotFoundImage from "../../images/404_page_not_found.svg";
import { NavLink } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import "./notFoundPage.css";

/**
 * Renders the 404 not found page when the user goes to an inexistent route
 * @param {boolean} homepage Indicates whether the component should
 *  redirect to the homepage or the dashboard
 * @returns Not Found Page
 */
const NotFoundPage = ({ homepage }) => {
  useDocumentTitle("Not Found");
  const redirectAddress = homepage ? "/" : "/dashboard/projects";
  const destination = homepage ? "Homepage" : "Dashboard";

  return (
    <div className="notFoundPage">
      <div className="notFoundPage__container">
        <div className="notFoundPage__image">
          <img src={NotFoundImage} alt="404 page not found" />
        </div>
        <NavLink
          to={redirectAddress}
          title={`Go back to ${destination}`}
          className="notFoundPage__link"
        >
          Back to {destination}
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;

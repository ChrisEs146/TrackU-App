import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logOut } from "../../store/slices/user";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar/Sidebar";
import jwt_decode from "jwt-decode";
import "./dashboard.css";

/**
 * Renders the dashboard component, with the sidebar navigation
 * and the projects main panel.
 * @returns Dashboard Component
 */
const Dashboard = ({ handleSidebarState, isSidebarActive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData, userToken } = useSelector((state) => state.user);

  useEffect(() => {
    // Checks if token exists and verifies if it's still valid.
    if (userToken) {
      const decodedToken = jwt_decode(userToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(logOut());
        navigate("/registration");
      }
    }
  }, [userToken, dispatch, navigate]);

  return (
    <div className="dashboard">
      <Sidebar
        handleSidebarState={handleSidebarState}
        isSidebarActive={isSidebarActive}
        fullName={userData?.fullName}
      />
      <div className="dashboard__projects-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

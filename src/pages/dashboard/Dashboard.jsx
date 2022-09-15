import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./dashboard.css";

/**
 * Renders the dashboard component, with the sidebar navigation
 * and the projects main panel.
 * @returns Dashboard Component
 */
const Dashboard = ({ handleSidebarState, isSidebarActive }) => {
  const { userData } = useSelector((state) => state.user);

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

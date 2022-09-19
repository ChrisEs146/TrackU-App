import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarContext } from "../../contexts/SidebarContext";
import "./dashboard.css";

/**
 * Renders the dashboard component, with the sidebar navigation
 * and the projects main panel.
 * @returns Dashboard Component
 */
const Dashboard = () => {
  const { userData } = useSelector((state) => state.user);
  const { sidebarStatus, sidebarHandler } = useContext(SidebarContext);

  return (
    <div className="dashboard">
      <Sidebar
        handleSidebarState={sidebarHandler}
        isSidebarActive={sidebarStatus}
        fullName={userData?.fullName}
      />
      <div className="dashboard__projects-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

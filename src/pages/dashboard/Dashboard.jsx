import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useGetUserQuery } from "../../store/slices/ApiSlices/userApiSlice";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarContext } from "../../contexts/SidebarContext";
import "./dashboard.css";

/**
 * Renders the dashboard component, with the sidebar navigation
 * and the projects main panel.
 * @returns Dashboard Component
 */
const Dashboard = () => {
  const { sidebarStatus, sidebarHandler } = useContext(SidebarContext);
  const { data: user } = useGetUserQuery("UserInfo");

  return (
    <div className="dashboard">
      <Sidebar
        handleSidebarState={sidebarHandler}
        isSidebarActive={sidebarStatus}
        fullName={user?.fullName}
      />
      <div className="dashboard__projects-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

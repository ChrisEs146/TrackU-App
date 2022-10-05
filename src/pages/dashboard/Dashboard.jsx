import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarContext } from "../../contexts/SidebarContext";
import { useGetUserQuery } from "../../store/slices/ApiSlices/userApiSlice";
import { setUserData } from "../../store/slices/userSlice";
import "./dashboard.css";

/**
 * Renders the dashboard component, with the sidebar navigation
 * and the projects main panel.
 * @returns Dashboard Component
 */
const Dashboard = () => {
  const { sidebarStatus, sidebarHandler } = useContext(SidebarContext);
  const { data: user, isSuccess } = useGetUserQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserData(user));
    }
  }, [isSuccess, user, dispatch]);

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

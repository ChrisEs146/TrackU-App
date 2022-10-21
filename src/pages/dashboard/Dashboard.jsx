import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetUserQuery } from "../../store/slices/ApiSlices/userApiSlice";
import { setUserData } from "../../store/slices/userSlice";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarContext } from "../../contexts/SidebarContext";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import "./dashboard.css";

/**
 * Renders the dashboard component, with the sidebar navigation
 * and the projects main panel.
 * @returns Dashboard Component
 */
const Dashboard = () => {
  const dispatch = useDispatch();
  const { sidebarStatus, sidebarHandler } = useContext(SidebarContext);
  const { data: user, isSuccess, isLoading } = useGetUserQuery("UserInfo");

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserData(user));
    }
  }, [isSuccess, user]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
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

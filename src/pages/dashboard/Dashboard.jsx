import { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetUserQuery } from "../../store/slices/ApiSlices/userApiSlice";
import { setUserData } from "../../store/slices/userSlice";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarContext } from "../../contexts/SidebarContext";
import "./dashboard.css";

/**
 * Renders the dashboard component, with the sidebar navigation
 * and the projects main panel.
 * @returns Dashboard Component
 */
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sidebarStatus, sidebarHandler } = useContext(SidebarContext);
  const { data: user, isSuccess } = useGetUserQuery("UserInfo");

  useEffect(() => {
    if (isSuccess) {
      console.log("In dashboard success block");
      dispatch(setUserData(user));
    }
  }, [isSuccess, user]);

  useEffect(() => {
    if (user) {
      navigate("/dashboard/projects");
    }
  }, [user]);

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

import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../store/slices/ApiSlices/userApiSlice";
import { SidebarContext } from "../../contexts/SidebarContext";
import { setUserData } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { addToLocalStorage, getFromLocalStorage } from "../../Utils/Functions";
import Sidebar from "../../components/Sidebar/Sidebar";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
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
  const { data: user, isSuccess, isLoading } = useGetUserQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserData(user));
      addToLocalStorage("User", user);
    }
  }, [isSuccess]);

  useEffect(() => {
    let isUser = getFromLocalStorage("User");
    if (isUser && isUser !== null) {
      return navigate("/dashboard/projects");
    }
  }, []);

  return (
    <div className="dashboard">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Sidebar
            handleSidebarState={sidebarHandler}
            isSidebarActive={sidebarStatus}
            fullName={user?.fullName}
          />
          <div className="dashboard__projects-container">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;

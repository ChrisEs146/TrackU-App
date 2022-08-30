import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/slices/user";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

/**
 * Renders the dashboard component, with the sidebar navigation
 * and the projects main panel.
 * @returns Dashboard Component
 */
const Dashboard = () => {
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
    } else {
      toast.error("Please, Sign In");
      navigate("/registration");
    }
  }, [dispatch, userToken, navigate]);

  /**
   * Loggs the user out, and redirects it to the homepage.
   */
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome {userData?.fullName}</h3>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Dashboard;

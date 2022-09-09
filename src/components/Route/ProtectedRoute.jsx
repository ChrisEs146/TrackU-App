import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () => {
  const { userToken } = useSelector((state) => state.user);

  if (!userToken) {
    return <Navigate to="/registration" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

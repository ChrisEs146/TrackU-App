import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

/**
 * Protected component that serves as a bridge between the
 * dashboard routes and the public routes.
 * @returns ProtectedRoute component
 */
const ProtectedRoute = () => {
  const { userToken } = useSelector((state) => state.user);

  if (!userToken) {
    return <Navigate to="/registration" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

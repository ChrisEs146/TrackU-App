import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

/**
 * Protected component that serves as a bridge between the
 * dashboard routes and the public routes.
 * @returns ProtectedRoute component
 */
const ProtectedRoute = () => {
  const { userToken } = useSelector((state) => state.user);
  const location = useLocation();

  return userToken ? (
    <Outlet />
  ) : (
    <Navigate to="/registration" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { logOut } from "../../store/slices/user";
import { getUserInfo } from "../../store/actions/userActions";

/**
 * Protected component that serves as a bridge between the
 * dashboard routes and the public routes.
 * @returns ProtectedRoute component
 */
const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.user);

  // Fetches user's info on reload
  useEffect(() => {
    if (userToken) {
      dispatch(getUserInfo());
    }
  }, [userToken, dispatch]);

  if (!userToken) {
    dispatch(logOut());
    return <Navigate to="/registration" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

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

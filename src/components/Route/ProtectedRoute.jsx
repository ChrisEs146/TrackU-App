import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { logOut } from "../../store/slices/user";
import jwt_decode from "jwt-decode";

/**
 * Protected component that serves as a bridge between the
 * dashboard routes and the public routes.
 * @returns ProtectedRoute component
 */
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.user);

  if (!userToken) {
    return <Navigate to="/registration" replace />;
  }

  // if (userToken) {
  //   const decodedToken = jwt_decode(userToken);
  //   if (decodedToken.exp * 1000 < new Date().getTime()) {
  //     dispatch(logOut());
  //     navigate("/registration");
  //   }
  // }

  return <Outlet />;
};

export default ProtectedRoute;

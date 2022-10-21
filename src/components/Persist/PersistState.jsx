import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRefreshMutation } from "../../store/slices/ApiSlices/userApiSlice";
import { useLogOutMutation } from "../../store/slices/ApiSlices/userApiSlice";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import { toast } from "react-toastify";

/**
 * Wrapper component who's in charge of mantaining the user's state
 * if the refresh token is still valid.
 */
const PersistState = () => {
  const { userToken } = useSelector((state) => state.user);
  const [success, setSuccess] = useState(false);
  const useEffectExecuted = useRef(false);
  const location = useLocation();
  const [refresh, { isLoading, isSuccess, isError, error, isUninitialized }] = useRefreshMutation();
  const [logOut] = useLogOutMutation();

  useEffect(() => {
    if (useEffectExecuted.current === true || process.env.NODE_ENV !== "development") {
      const validateToken = async () => {
        try {
          await refresh().unwrap();
          setSuccess(true);
        } catch (error) {
          await logOut();
        }
      };
      if (!userToken) validateToken();
    }

    return () => (useEffectExecuted.current = true);
    //eslint-disable-next-line
  }, [userToken]);

  // Setting content based on outcome of token validation.
  let content;
  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (isError) {
    toast.error(error.data.message);
    content = <Navigate to="/registration" state={{ from: location }} replace />;
  } else if ((isSuccess && success) || (userToken && isUninitialized)) {
    content = <Outlet />;
  }

  return content;
};

export default PersistState;

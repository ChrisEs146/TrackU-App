import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRefreshMutation } from "../../store/slices/ApiSlices/userApiSlice";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import { toast } from "react-toastify";

/**
 * Wrapper component who's in charge of mantaining the user's state
 * while the refresh token is still valid.
 */
const PersistState = () => {
  const { userToken } = useSelector((state) => state.user);
  const [success, setSuccess] = useState(false);
  const useEffectExecuted = useRef(false);
  const location = useLocation();
  const [refresh, { isLoading, isSuccess, isError, isUninitialized }] = useRefreshMutation();

  useEffect(() => {
    if (useEffectExecuted.current === true || process.env.NODE_ENV !== "development") {
      const validateToken = async () => {
        try {
          console.log("In persistent");
          await refresh();
          setSuccess(true);
        } catch (error) {
          console.error(error);
        }
      };
      if (!userToken) validateToken();
    }

    return () => (useEffectExecuted.current = true);
    //eslint-disable-next-line
  }, []);

  // Setting content based on outcome of token validation.
  let content;
  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (isError) {
    toast.error("Session Expired");
    content = <Navigate to="/registration" state={{ from: location }} replace />;
  } else if ((isSuccess && success) || (userToken && isUninitialized)) {
    content = <Outlet />;
  }

  return content;
};

export default PersistState;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Loading } from "./index";

const AuthValidation = ({ authentication = true, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const authStatus = useSelector((state) => state.auth.status);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authStatus) return;
    const isAuthenticated = authStatus === authentication;

    const shouldRedirect =
      (authentication && !isAuthenticated) ||
      (!authentication && isAuthenticated);

    if (shouldRedirect) {
      const targetRoute = authentication ? "/auth" : "/dashboard";
      if (location.pathname !== targetRoute) {
        navigate(targetRoute);
      }
    }

    setLoading(false);
  }, [authStatus, navigate, authentication, location]);

  return loading ? <Loading /> : <>{children}</>;
};

export default AuthValidation;

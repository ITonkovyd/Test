import React from "react";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ element: Component, redirectTo = "/" }) => {
  const isLoggedIn = localStorage.getItem("key") ? true : false;

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;

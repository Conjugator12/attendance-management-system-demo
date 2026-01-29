// src/components/PrivateRoute.jsx (Enhanced)
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...props }) => {
  // Get user from localStorage
  const userString =
    localStorage.getItem("user") || localStorage.getItem("demoUser");

  if (!userString) {
    return <Navigate to="/login" />;
  }

  const user = JSON.parse(userString);
  const isDemo = !!localStorage.getItem("demoUser");

  // Clone children and pass user & isDemo as props
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        user,
        isDemo,
        ...props,
      });
    }
    return child;
  });

  return childrenWithProps;
};

export default PrivateRoute;

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextDatas } from "../services/Context";

function PrivateRoute({ children }) {
  const { isLogedIn } = useContext(ContextDatas);

  if (!isLogedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;

import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  const token = localStorage.getItem("token");
  const location = useLocation();
  
  if (!token || token === undefined) {
    localStorage.removeItem("token");
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <Outlet/>;
}

export default RequireAuth;
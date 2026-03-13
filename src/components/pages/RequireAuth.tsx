import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");
  const location = useLocation();

  if (!token || token === undefined) {
    resetData();
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (!userData || userData === undefined) {
    resetData();
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

const resetData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
};

export default RequireAuth;

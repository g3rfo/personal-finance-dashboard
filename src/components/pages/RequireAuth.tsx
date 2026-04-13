import { resetData } from "@/utils/userData";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");
  const location = useLocation();

  const isUserDataValid =
    token &&
    typeof token === "string" &&
    userData &&
    typeof userData === "string";

  if (!isUserDataValid) {
    resetData();
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;

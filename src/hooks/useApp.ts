import { fetchUserData } from "@/features/store/asyncThunks/userThunks";
import { useAppDispatch } from "@/features/store/hooks";
import { loginUser } from "@/features/store/slices/userSlice";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("userData");

    if (!token) {
      return;
    }

    if (userData) {
      try {
        dispatch(loginUser(JSON.parse(userData)));
      } catch {
        localStorage.removeItem("userData");
        dispatch(fetchUserData(token));
      }
    } else {
      dispatch(fetchUserData(token));
    }

    if (
      location.pathname === "/" ||
      location.pathname === "/auth" ||
      location.pathname === "/registration"
    ) {
      navigate("/dashboard", { replace: true });
    }
  }, [dispatch, location.pathname, navigate]);
}

export default useApp;

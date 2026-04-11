import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PageWrap from "./components/pages/authorized/PageWrap";
import AuthPage from "./components/pages/notAuthorized/AuthPage";
import RequireAuth from "./components/pages/RequireAuth";
import DashboardPage from "./components/pages/authorized/dashboardPage/DashboardPage";
import RegistrationPage from "./components/pages/notAuthorized/RegistrationPage";
import TransactionsPage from "./components/pages/authorized/transactionPage/TransactionsPage";
import CategoriesPage from "./components/pages/authorized/categoryPage/CategoriesPage";
import { useAppDispatch } from "./features/store/hooks";
import { useEffect } from "react";
import { loginUser } from "./features/store/slices/userSlice";
import { fetchUserData } from "./features/store/asyncThunks/userThunks";

function App() {
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

  return (
    <div className="w-full min-h-screen flex">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route element={<RequireAuth />}>
          <Route element={<PageWrap />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/analytics" element={<>Analytics</>} />
            <Route path="/settings" element={<>Settings</>} />
          </Route>
        </Route>
        <Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

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
import { useEffect } from "react";
import DashboardPage from "./components/pages/authorized/dashboardPage/DashboardPage";
import { useAppDispatch } from "./features/store/hooks";
import { fetchUserData } from "./features/store/asyncThunks/userThunks";
import { loginUser } from "./features/store/slices/userSlice";
import RegistrationPage from "./components/pages/notAuthorized/RegistrationPage";
import TransactionsPage from "./components/pages/authorized/transactionPage/TransactionsPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("userData");

    if (token) {
      if (userData) {
        dispatch(loginUser(JSON.parse(userData)));
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
    }
  }, [dispatch, location.pathname, navigate]);

  return (
    <div className="w-full min-h-screen flex">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route element={<RequireAuth />}>
          <Route
            key="dashboard"
            path="/dashboard"
            element={
              <PageWrap>
                <DashboardPage />
              </PageWrap>
            }
          />
          <Route
            key="transactions"
            path="/transactions"
            element={
              <PageWrap>
                <TransactionsPage />
              </PageWrap>
            }
          />
          <Route path="/categories" element={<PageWrap>Categories</PageWrap>} />
          <Route path="/budgets" element={<PageWrap>Budgets</PageWrap>} />
          <Route path="/analytics" element={<PageWrap>Analytics</PageWrap>} />
          <Route path="/settings" element={<PageWrap>Settings</PageWrap>} />
        </Route>
        <Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import PageWrap from "./components/pages/authorized/PageWrap";
import AuthPage from "./components/pages/notAuthorized/AuthPage";
import RequireAuth from "./components/pages/RequireAuth";
import DashboardPage from "./components/pages/authorized/dashboardPage/DashboardPage";
import RegistrationPage from "./components/pages/notAuthorized/RegistrationPage";
import TransactionsPage from "./components/pages/authorized/transactionPage/TransactionsPage";
import CategoriesPage from "./components/pages/authorized/categoryPage/CategoriesPage";
import AnalyticsPage from "./components/pages/authorized/analyticsPage/AnalyticsPage";
import SettingsPage from "./components/pages/authorized/settingsPage/SettingsPage";
import useApp from "./hooks/useApp";

function App() {
  useApp();

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
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
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

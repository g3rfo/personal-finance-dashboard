import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import PageWrap from "./components/pages/authorised/PageWrap";
import AuthPage from "./components/pages/notAuthorised/AuthPage";
import RequireAuth from "./components/pages/RequireAuth";
import { useEffect } from "react";
import DashboardPage from "./components/pages/authorised/dashboardPage/DashboardPage";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="w-full h-screen flex">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
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
            element={<PageWrap>Transactions</PageWrap>}
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

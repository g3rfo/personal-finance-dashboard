import { Route, Routes } from "react-router-dom";
import Aside from "./components/aside/Aside";

function App() {
  return (
    <div className="w-full h-screen flex">
      <Aside />

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/transactions" element={<div>Transactions</div>} />
        <Route path="/categories" element={<div>Categories</div>} />
        <Route path="/budgets" element={<div>Budgets</div>} />
        <Route path="/analytics" element={<div>Analytics</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
      </Routes>
    </div>
  );
}

export default App;

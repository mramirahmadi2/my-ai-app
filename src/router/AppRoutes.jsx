import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../page/Login";
// import Dashboard from "../pages/Dashboard";
import { useState } from "react";

// کامپوننتی برای محافظت از مسیرهای خصوصی
const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {/* صفحه لاگین */}
      <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />

      {/* مسیر محافظت شده برای داشبورد */}
      {/* <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Dashboard />} />} /> */}

      {/* هدایت همه مسیرهای ناشناخته به صفحه لاگین */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;

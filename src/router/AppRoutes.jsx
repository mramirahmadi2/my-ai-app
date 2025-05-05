import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "../page/Login";
import Home from "../page/Home";
import Layout from "../Layout";
import PrivateChat from "../page/PrivateChat";
import MedicineForm from "../page/MedicineForm/MedicineForm.jsx";

const ProtectedRoute = ({ children, isAuthenticated }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("isAuthenticated") === "true";
    });

    // Update localStorage whenever auth changes
    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    return (
        <Routes>
            <Route
                path="/login"
                element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
            />

            <Route
                path="/"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Layout>
                            <Home />
                        </Layout>
                    </ProtectedRoute>
                }
            />

            <Route
                path="/new-chat"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Layout>
                            <PrivateChat />
                        </Layout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/medicine-form"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Layout>
                            <MedicineForm />
                        </Layout>
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default AppRoutes;

import React from "react";
import { Route, Routes, Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Customer from "../pages/dashboard/Customer";
import Login from "../pages/shared/Login";
import Register from "../pages/shared/Register";

const BasicRoute = () => {
  return (
    <Routes>
      {/* Root Redirect */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Main Layout Routes */}
      <Route element={<MainLayout />}>
        <Route path="/customer-dashboard" element={<Customer />} />
        <Route path="/admin-dashboard" element={<Customer />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default BasicRoute;

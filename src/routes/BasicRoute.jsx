import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Customer from "../pages/dashboard/Customer";
import Login from "../pages/shared/Login";
import Register from "../pages/shared/Register";

const BasicRoute = () => {
  return (
    <div>
      <Routes>
        {/*  Main Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Customer />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default BasicRoute;

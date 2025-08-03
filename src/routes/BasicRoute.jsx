import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Customer from "../pages/dashboard/Customer";

const BasicRoute = () => {
  return (
    <div>
      <Routes>
        {/*  Main Layout Route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Customer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default BasicRoute;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VehiclesPage from "./pages/VehiclesPage";
import CustomersPage from "./pages/CustomersPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import AddVehiclePage from "./pages/AddVehiclePage";
import AddCustomerPage from "./pages/AddCustomerPage";
import AddAppointmentPage from "./pages/AddAppointmentPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vehicles" element={<VehiclesPage />} />
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/add-vehicle" element={<AddVehiclePage />} />
      <Route path="/add-customer" element={<AddCustomerPage />} />
      <Route path="/add-appointment" element={<AddAppointmentPage />} />
    </Routes>
  );
};

export default AppRoutes;

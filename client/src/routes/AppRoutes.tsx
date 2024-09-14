import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import HomePage from "../views/HomePage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;

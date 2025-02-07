import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Chatbot from "./Chatbot";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import WhatIfTool from "./WhatIfTool";

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/whatiftool" element={<WhatIfTool />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

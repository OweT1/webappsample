import React from "react";
import AppRoutes from "./Routes";
import "./App.css";
import WebBanner from "./WebBanner";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <WebBanner />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;

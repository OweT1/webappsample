import React from "react";
import nus_logo from "./assets/nus_sds_logo.svg";
import "./WebBanner.css";

function WebBanner() {
  return (
    <div className="banner">
      <img className="img" src={nus_logo} />
    </div>
  );
}

export default WebBanner;

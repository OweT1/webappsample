import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import LinkButton from "./LinkButton";

function NavBar() {
  const linkButtonData = {
    homeButton: {
      webUrl: "/",
      imgUrl: "src/assets/home.png",
      webName: "Home",
    },

    dashboardButton: {
      webUrl: "/dashboard",
      imgUrl: "src/assets/dashboard.png",
      webName: "Dashboard",
    },

    chatbotButton: {
      webUrl: "/chatbot",
      imgUrl: "src/assets/chatbot.png",
      webName: "Chatbot",
    },

    whatiftoolButton: {
      webUrl: "/whatiftool",
      imgUrl: "src/assets/forecast.png",
      webName: "WhatIfTool",
    },
  };

  return (
    <nav className="navbar">
      <LinkButton {...linkButtonData.homeButton} />
      <LinkButton {...linkButtonData.dashboardButton} />
      <LinkButton {...linkButtonData.chatbotButton} />
      <LinkButton {...linkButtonData.whatiftoolButton} />
    </nav>
  );
}

export default NavBar;

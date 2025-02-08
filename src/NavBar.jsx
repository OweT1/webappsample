import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import LinkButton from "./LinkButton";

function NavBar() {
  const linkButtonData = {
    homeButton: {
      webUrl: "/",
      imgUrl: "/assets/home.png",
      webName: "Home",
    },

    dashboardButton: {
      webUrl: "/dashboard",
      imgUrl: "/assets/dashboard.png",
      webName: "Dashboard",
    },

    chatbotButton: {
      webUrl: "/chatbot",
      imgUrl: "/assets/chatbot.png",
      webName: "Chatbot",
    },

    whatiftoolButton: {
      webUrl: "/whatiftool",
      imgUrl: "/assets/forecast.png",
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

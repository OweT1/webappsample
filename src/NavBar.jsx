import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import LinkButton from "./LinkButton";

function NavBar() {
  const linkButtonData = {
    homeButton: {
      webUrl: "/",
      imgUrl: "public/assets/home.png",
      webName: "Home",
    },

    dashboardButton: {
      webUrl: "/dashboard",
      imgUrl: "public/assets/dashboard.png",
      webName: "Dashboard",
    },

    chatbotButton: {
      webUrl: "/chatbot",
      imgUrl: "public/assets/chatbot.png",
      webName: "Chatbot",
    },

    whatiftoolButton: {
      webUrl: "/whatiftool",
      imgUrl: "public/assets/forecast.png",
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

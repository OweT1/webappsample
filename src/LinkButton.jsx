import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.css";

function LinkButton(props) {
  return (
    <Link to={props.webUrl} className="nav-button">
      <img src={props.imgUrl} alt={props.webName} />
    </Link>
  );
}

export default LinkButton;

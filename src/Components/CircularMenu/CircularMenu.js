import React from "react";
import "./CircularMenu.css";

const CircularMenu = () => {
  const handleMenuToggleClick = () => {
    const circularMenu = document.getElementById("circular-menu");
    circularMenu.classList.toggle("active");
  };

  return (
    <div className="circular-menu-page-container">

        <div className="circular-menu" id="circular-menu">

          <div className="circular-menu-toggle" onClick={handleMenuToggleClick}>
            <i class="fas fa-plus"></i>
          </div>

          <li style={{ "--i": "0" }}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <i class="fas fa-home"></i>
            </a>
          </li>
          <li style={{ "--i": "1" }}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <i class="fas fa-user"></i>
            </a>
          </li>
          <li style={{ "--i": "2" }}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <i class="fas fa-tools"></i>
            </a>
          </li>
          <li style={{ "--i": "3" }}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <i class="fas fa-handshake"></i>
            </a>
          </li>
          <li style={{ "--i": "4" }}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <i class="fas fa-car-battery"></i>
            </a>
          </li>
          <li style={{ "--i": "5" }}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <i class="fas fa-atom"></i>
            </a>
          </li>
          <li style={{ "--i": "6" }}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <i class="fas fa-football-ball"></i>
            </a>
          </li>
          <li style={{ "--i": "7" }}>
            <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
              <i class="fas fa-wine-bottle"></i>
            </a>
          </li>

        </div>

    </div>
  );
};

export default CircularMenu;

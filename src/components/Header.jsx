// src/components/Header.jsx
import React from "react";
import "../styles/Header.css";

const Header = ({ userName, children }) => {
  const nameParts = userName ? userName.split(" ") : ["J", "D"];
  const initials = nameParts.map((part) => part.charAt(0)).join("");

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo">AS</div>
            <h1 className="app-title">Attendance System</h1>
          </div>
          {children}
        </div>

        <div className="user-info">
          <div className="avatar">{initials}</div>
          {userName && <span className="user-name">{userName}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;

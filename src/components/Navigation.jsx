// src/components/Navigation.jsx
import React from "react";
import "../styles/Navigation.css";

const Navigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "classes", label: "Classes", icon: "📚" },
    { id: "meetings", label: "Meetings", icon: "👥" },
    { id: "history", label: "History", icon: "📈" },
  ];

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`nav-item ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

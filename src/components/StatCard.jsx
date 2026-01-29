// src/components/StatCard.jsx
import React from "react";
import "../styles/StatCard.css";

const StatCard = ({
  title = "Statistic",
  value = "0",
  change = "0",
  icon = "📊",
  trend = "neutral",
}) => {
  const trendIcons = {
    up: "↗️",
    down: "↘️",
    neutral: "➡️",
  };

  const trendColors = {
    up: "var(--success-green)",
    down: "var(--error-red)",
    neutral: "var(--slate-500)",
  };

  const changeText = change !== "0" ? `${change > 0 ? "+" : ""}${change}%` : "";

  return (
    <div className="stat-card fade-in">
      <div className="stat-header">
        <h4 className="stat-title">{title}</h4>
        <div className="stat-icon">{icon}</div>
      </div>

      <div className="stat-value">{value}</div>

      {changeText && (
        <div className="stat-change" style={{ color: trendColors[trend] }}>
          <span className="trend-icon">{trendIcons[trend]}</span>
          <span>{changeText}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;

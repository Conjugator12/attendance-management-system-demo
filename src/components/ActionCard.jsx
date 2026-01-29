// src/components/ActionCard.jsx
import React from "react";
import "../styles/ActionCard.css";

const ActionCard = ({
  title = "Action Card",
  description = "",
  icon = "📝",
  buttonText = "Take Action",
  variant = "primary",
  onActionClick,
}) => {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
  };

  return (
    <div className="action-card slide-up">
      <div className="card-header">
        <div className="card-icon">{icon}</div>
        <h3 className="card-title">{title}</h3>
      </div>

      {description && <p className="card-description">{description}</p>}

      <div className="card-footer">
        <button
          className={`btn ${variantClasses[variant] || "btn-primary"} action-button`}
          onClick={onActionClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ActionCard;

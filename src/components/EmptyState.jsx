import React from "react";
import "../styles/EmptyState.css";

const EmptyState = ({
  title = "No data available",
  description = "Nothing to show here",
}) => {
  return (
    <div className="empty-state">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default EmptyState;

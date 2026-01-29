// src/components/ClassCard.jsx
import React from "react";
import "../styles/ClassCard.css";
const ClassCard = ({
  name = "Class Name",
  code = "CODE101",
  time = "Mon, Wed - 10:00 AM",
  attendance = "0",
  instructor = "Instructor Name",
  color = "blue",
  onViewDetails,
}) => {
  const colorMap = {
    blue: "var(--primary-blue)",
    green: "var(--success-green)",
    orange: "var(--warning-orange)",
    purple: "#8b5cf6",
  };

  const attendanceColor =
    parseInt(attendance) >= 80
      ? "var(--success-green)"
      : parseInt(attendance) >= 60
        ? "var(--warning-orange)"
        : "var(--error-red)";

  return (
    <div
      className="class-card slide-up"
      style={{ borderTopColor: colorMap[color] || colorMap.blue }}
    >
      <div className="class-header">
        <div>
          <h3 className="class-name">{name}</h3>
          <div className="class-code">{code}</div>
        </div>
        <div className="attendance-badge">{attendance}%</div>
      </div>

      <div className="class-details">
        <div className="detail-item">
          <span className="detail-icon">🕐</span>
          <span>{time}</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">👨‍🏫</span>
          <span>{instructor}</span>
        </div>
      </div>

      <div className="attendance-section">
        <div className="attendance-header">
          <span className="attendance-label">Attendance</span>
          <span className="attendance-value" style={{ color: attendanceColor }}>
            {attendance}%
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${attendance}%`,
              backgroundColor: attendanceColor,
            }}
          ></div>
        </div>
      </div>

      <div className="card-footer">
        <div className="instructor">{instructor}</div>
        <button className="view-details-btn" onClick={onViewDetails}>
          View Details →
        </button>
      </div>
    </div>
  );
};

export default ClassCard;

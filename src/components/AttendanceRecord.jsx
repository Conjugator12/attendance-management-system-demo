// src/components/AttendanceRecord.jsx
import React from "react";
import "../styles/AttendanceRecord.css";

const AttendanceRecord = ({
  date = "2023-10-01",
  className = "Mathematics",
  status = "present",
  time = "10:00 AM",
  instructor = "Prof. Smith",
}) => {
  const statusConfig = {
    present: {
      text: "Present",
      color: "var(--success-green)",
      bgColor: "rgba(34, 197, 94, 0.1)",
      icon: "✅",
    },
    absent: {
      text: "Absent",
      color: "var(--error-red)",
      bgColor: "rgba(239, 68, 68, 0.1)",
      icon: "❌",
    },
    late: {
      text: "Late",
      color: "var(--warning-orange)",
      bgColor: "rgba(249, 115, 22, 0.1)",
      icon: "⏰",
    },
  };

  const config = statusConfig[status] || statusConfig.present;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="record-card fade-in">
      <div className="record-header">
        <div className="date">{formattedDate}</div>
        <div
          className="status-badge"
          style={{
            color: config.color,
            backgroundColor: config.bgColor,
          }}
        >
          <span>{config.icon}</span>
          <span>{config.text}</span>
        </div>
      </div>

      <div className="class-name">{className}</div>

      <div className="record-details">
        <div className="detail-item">
          <span>🕐</span>
          <span>{time}</span>
        </div>
        <div className="detail-item">
          <span>👨‍🏫</span>
          <span>{instructor}</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceRecord;

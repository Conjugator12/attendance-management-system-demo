import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import UniversityLogo from "../components/UniversityLogo";
import "../styles/Classes.css";

const Classes = ({ user }) => {
  const navigate = useNavigate();

  // If no user, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Sample data (replace with your actual data import)
  const classesData = [
    {
      id: 1,
      name: "Data Structures",
      code: "CS201",
      time: "9:00 AM",
      attendance: 90,
      instructor: "Dr. Smith",
      color: "blue",
    },
    {
      id: 2,
      name: "Web Development",
      code: "IT202",
      time: "11:00 AM",
      attendance: 95,
      instructor: "Prof. Johnson",
      color: "green",
    },
    {
      id: 3,
      name: "Database Systems",
      code: "CS203",
      time: "2:00 PM",
      attendance: 88,
      instructor: "Dr. Williams",
      color: "purple",
    },
    {
      id: 4,
      name: "Networking",
      code: "IT204",
      time: "4:00 PM",
      attendance: 92,
      instructor: "Prof. Brown",
      color: "orange",
    },
    {
      id: 5,
      name: "Software Engineering",
      code: "CS205",
      time: "10:00 AM",
      attendance: 85,
      instructor: "Dr. Davis",
      color: "red",
    },
    {
      id: 6,
      name: "Mobile Development",
      code: "IT206",
      time: "1:00 PM",
      attendance: 94,
      instructor: "Prof. Wilson",
      color: "teal",
    },
  ];

  const handleClassDetails = (classId) => {
    alert(`Viewing details for class ID: ${classId}`);
    // Or navigate to class details page:
    // navigate(`/classes/${classId}`);
  };

  const handleMarkAttendance = (classId) => {
    alert(`Marking attendance for class ID: ${classId}`);
    // Logic to mark attendance
  };

  return (
    <div className="classes-container">
      {/* Header */}
      <header className="classes-header">
        <div className="header-left">
          <UniversityLogo size="small" name="" />
        </div>
        <nav className="header-nav">
          <button className="nav-link" onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>
          <button className="nav-link active">Classes</button>
          <button className="nav-link" onClick={() => navigate("/meetings")}>
            Meetings
          </button>
          <button className="nav-link" onClick={() => navigate("/history")}>
            History
          </button>
        </nav>
        <div className="header-right">
          <span className="user-info">👤 {user?.name || "Student"}</span>
        </div>
      </header>

      <main className="classes-main">
        <div className="classes-header-section">
          <h1 className="classes-title">My Classes</h1>
          <p className="classes-subtitle">View and manage your classes</p>
          <div className="welcome-message">
            Welcome, {user?.name || "Student"}! You have {classesData.length}{" "}
            classes.
          </div>
        </div>

        {/* Class Filters */}
        <div className="class-filters">
          <div className="filter-group">
            <label>Filter by:</label>
            <select className="filter-select">
              <option>All Classes</option>
              <option>Today's Classes</option>
              <option>High Attendance</option>
              <option>Low Attendance</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Sort by:</label>
            <select className="filter-select">
              <option>Time</option>
              <option>Name</option>
              <option>Attendance</option>
              <option>Instructor</option>
            </select>
          </div>
          <button className="btn btn-primary">📅 View Calendar</button>
        </div>

        {/* Classes Grid */}
        <div className="classes-grid">
          {classesData.map((classItem) => (
            <div key={classItem.id} className="class-card">
              <div className={`class-header ${classItem.color}`}>
                <div className="class-code">{classItem.code}</div>
                <div className="class-actions">
                  <button
                    className="btn-icon"
                    onClick={() => handleClassDetails(classItem.id)}
                  >
                    👁️
                  </button>
                  <button
                    className="btn-icon"
                    onClick={() => handleMarkAttendance(classItem.id)}
                  >
                    ✅
                  </button>
                </div>
              </div>
              <div className="class-body">
                <h3 className="class-name">{classItem.name}</h3>
                <div className="class-meta">
                  <div className="meta-item">
                    <span className="meta-label">⏰ Time:</span>
                    <span className="meta-value">{classItem.time}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">👨‍🏫 Instructor:</span>
                    <span className="meta-value">{classItem.instructor}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">📊 Attendance:</span>
                    <span
                      className={`attendance-value ${classItem.attendance > 85 ? "high" : "low"}`}
                    >
                      {classItem.attendance}%
                    </span>
                  </div>
                </div>
                <div className="class-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${classItem.attendance}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {classItem.attendance}% attendance rate
                  </span>
                </div>
              </div>
              <div className="class-footer">
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => handleClassDetails(classItem.id)}
                >
                  View Details
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleMarkAttendance(classItem.id)}
                >
                  Mark Attendance
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no classes) */}
        {classesData.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📚</div>
            <h3>No Classes Found</h3>
            <p>You are not enrolled in any classes yet.</p>
            <button className="btn btn-primary">
              Browse Available Classes
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Classes;

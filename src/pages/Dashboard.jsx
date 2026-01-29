import React, { useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import UniversityLogo from "../components/UniversityLogo";
import "../styles/Dashboard.css";

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  // Get user from localStorage FIRST
  const user = JSON.parse(
    localStorage.getItem("user") || localStorage.getItem("demoUser") || "null",
  );
  const isDemo = !!localStorage.getItem("demoUser");

  // Set document title AFTER user is declared
  useEffect(() => {
    document.title = `${user?.name || "User"} - Dashboard | KAAF Attendance`;
  }, [user?.name]);

  // Loading state
  if (!user) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  // Sample data
  const stats = {
    totalClasses: 8,
    attendanceRate: 85,
    presentDays: 17,
    absentDays: 3,
  };

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
  ];

  const attendanceRecords = [
    {
      date: "2024-01-15",
      className: "Data Structures",
      status: "Present",
      time: "9:00 AM",
      instructor: "Dr. Smith",
    },
    {
      date: "2024-01-14",
      className: "Web Development",
      status: "Present",
      time: "11:00 AM",
      instructor: "Prof. Johnson",
    },
    {
      date: "2024-01-13",
      className: "Database Systems",
      status: "Absent",
      time: "2:00 PM",
      instructor: "Dr. Williams",
    },
    {
      date: "2024-01-12",
      className: "Networking",
      status: "Present",
      time: "4:00 PM",
      instructor: "Prof. Brown",
    },
    {
      date: "2024-01-11",
      className: "Data Structures",
      status: "Present",
      time: "9:00 AM",
      instructor: "Dr. Smith",
    },
  ];

  // Handlers for actions
  const handleActionClick = (action) => {
    alert(`Action clicked: ${action}`);
  };

  const handleClassDetails = (classId) => {
    alert(`Viewing details for class ID: ${classId}`);
  };

  return (
    <div className="dashboard">
      {/* Header/Navigation */}
      <header className="dashboard-header">
        <div className="header-left">
          <UniversityLogo size="small" name="" />
        </div>
        <nav className="header-nav">
          <Link to="/dashboard" className="nav-link active">
            Dashboard
          </Link>
          <Link to="/classes" className="nav-link">
            Classes
          </Link>
          <Link to="/meetings" className="nav-link">
            Meetings
          </Link>
          <Link to="/history" className="nav-link">
            History
          </Link>
        </nav>
        <div className="header-right">
          <span className="user-name">{user?.name}</span>
          <button className="btn btn-logout" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      {isDemo && (
        <div className="demo-banner">
          🚀 Demo Mode - Data resets on page refresh
        </div>
      )}

      <main className="dashboard-content">
        <div className="dashboard-container">
          <div className="dashboard-header-section">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="welcome-message">
              Welcome back, {user?.name || "User"}!
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-content">
                <h3>Total Classes</h3>
                <p className="stat-number">{stats.totalClasses}</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <h3>Attendance Rate</h3>
                <p className="stat-number">{stats.attendanceRate}%</p>
                <span className="stat-change positive">+2%</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <h3>Present Days</h3>
                <p className="stat-number">{stats.presentDays}</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">❌</div>
              <div className="stat-content">
                <h3>Absent Days</h3>
                <p className="stat-number">{stats.absentDays}</p>
                <span className="stat-change negative">-1</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="section">
            <h2 className="section-title">Quick Actions</h2>
            <div className="actions-grid">
              <div className="action-card">
                <div className="action-icon">✅</div>
                <h3>Mark Attendance</h3>
                <p>Mark attendance for today's classes</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleActionClick("mark-attendance")}
                >
                  Mark Now
                </button>
              </div>

              <div className="action-card">
                <div className="action-icon">📚</div>
                <h3>View Classes</h3>
                <p>Check your class schedule and details</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate("/classes")}
                >
                  View Classes
                </button>
              </div>

              <div className="action-card">
                <div className="action-icon">📥</div>
                <h3>Download Report</h3>
                <p>Download your attendance report</p>
                <button
                  className="btn btn-accent"
                  onClick={() => handleActionClick("download-report")}
                >
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Recent Classes */}
          <div className="section">
            <div className="section-header">
              <h2 className="section-title">Recent Classes</h2>
              <Link to="/classes" className="btn btn-outline">
                View All
              </Link>
            </div>
            <div className="classes-grid">
              {classesData.map((classItem) => (
                <div key={classItem.id} className="class-card">
                  <div className={`class-color ${classItem.color}`}></div>
                  <div className="class-content">
                    <h3>{classItem.name}</h3>
                    <p className="class-code">{classItem.code}</p>
                    <p className="class-time">⏰ {classItem.time}</p>
                    <div className="class-meta">
                      <span className="attendance-rate">
                        📊 {classItem.attendance}% Attendance
                      </span>
                      <span className="instructor">
                        👨‍🏫 {classItem.instructor}
                      </span>
                    </div>
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => handleClassDetails(classItem.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Attendance */}
          <div className="section">
            <h2 className="section-title">Recent Attendance</h2>
            <div className="attendance-table">
              {attendanceRecords.map((record, index) => (
                <div key={index} className="attendance-record">
                  <div className="record-date">
                    <span className="date">
                      {new Date(record.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="record-class">{record.className}</div>
                  <div
                    className={`record-status ${record.status.toLowerCase()}`}
                  >
                    {record.status}
                  </div>
                  <div className="record-time">{record.time}</div>
                  <div className="record-instructor">{record.instructor}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-content">
          <UniversityLogo size="xs" name="" />
          <p>
            © {new Date().getFullYear()} KAAF Attendance System. All rights
            reserved.
          </p>
          <div className="footer-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/help">Help</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

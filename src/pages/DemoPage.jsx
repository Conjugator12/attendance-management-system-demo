// src/pages/DemoPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UniversityLogo from "../components/UniversityLogo";
import "../styles/DemoPage.css";

const DemoPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("student");

  const handleDemoLogin = () => {
    const demoUsers = {
      student: {
        name: "John Doe (Demo)",
        id: "STU2024001",
        role: "student",
        department: "Computer Science",
        email: "john.demo@kaaf.edu",
      },
      lecturer: {
        name: "Dr. Sarah Smith (Demo)",
        id: "LEC2024001",
        role: "lecturer",
        department: "Information Technology",
        email: "sarah.demo@kaaf.edu",
      },
      admin: {
        name: "Admin User (Demo)",
        id: "ADM2024001",
        role: "admin",
        department: "Administration",
        email: "admin.demo@kaaf.edu",
      },
    };

    onLogin(demoUsers[selectedRole]);
    navigate("/dashboard");
  };

  return (
    <div className="demo-container">
      <div className="demo-card">
        <div className="demo-header">
          <UniversityLogo size="large" name="Demo Mode" />
          <h1>Try Demo Version</h1>
          <p>Experience the system without creating an account</p>
        </div>

        <div className="demo-role-selection">
          <h3>Select Demo Role:</h3>
          <div className="role-options">
            {[
              {
                id: "student",
                icon: "🎓",
                label: "Student",
                desc: "Attend classes & mark attendance",
              },
              {
                id: "lecturer",
                icon: "👨‍🏫",
                label: "Lecturer",
                desc: "Create sessions & manage attendance",
              },
              {
                id: "admin",
                icon: "👨‍💼",
                label: "Administrator",
                desc: "Manage system & view reports",
              },
            ].map((role) => (
              <div
                key={role.id}
                className={`role-option ${selectedRole === role.id ? "selected" : ""}`}
                onClick={() => setSelectedRole(role.id)}
              >
                <div className="role-icon">{role.icon}</div>
                <div className="role-info">
                  <h4>{role.label}</h4>
                  <p>{role.desc}</p>
                </div>
                {selectedRole === role.id && (
                  <div className="selected-check">✓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="demo-features">
          <h3>Demo Features:</h3>
          <ul>
            <li>✅ Full access to all system features</li>
            <li>✅ Sample data pre-loaded</li>
            <li>✅ No account creation required</li>
            <li>✅ Experience as Student, Lecturer, or Admin</li>
            <li>⚠️ Data resets on page refresh</li>
          </ul>
        </div>

        <div className="demo-actions">
          <button
            className="btn btn-primary demo-start-btn"
            onClick={handleDemoLogin}
          >
            Start Demo as{" "}
            {selectedRole === "student"
              ? "Student"
              : selectedRole === "lecturer"
                ? "Lecturer"
                : "Admin"}
          </button>

          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        </div>

        <div className="demo-note">
          <p>
            <strong>Note:</strong> This is a demonstration version. All data is
            temporary and will be lost when you leave the page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;

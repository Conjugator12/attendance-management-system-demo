// src/pages/AuthLandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import UniversityLogo from "../components/UniversityLogo";
import "../styles/AuthLandingPage.css";

const AuthLandingPage = () => {
  const navigate = useNavigate();

  // Demo login handler - SINGLE VERSION
  const handleDemoLogin = () => {
    // Create demo user data
    const demoUser = {
      name: "Demo Student",
      id: "DEMO001",
      role: "student",
      department: "Computer Science",
      email: "demo@kaaf.edu",
      isDemo: true,
    };

    // Save demo user to localStorage
    localStorage.setItem("demoUser", JSON.stringify(demoUser));

    // Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card slide-up">
        {/* Logo and Welcome Section */}
        <div className="auth-header">
          <div className="auth-logo">
            <UniversityLogo size="medium" name="" />
          </div>
          <h1 className="welcome-title">
            Welcome To KAAF CS & IT Attendance System
          </h1>
          <p className="welcome-subtitle">
            Track your classes and meetings efficiently
          </p>
        </div>

        {/* User Role Selection */}
        <div className="role-selection">
          <h3 className="role-title">I am a:</h3>
          <div className="role-buttons">
            <button className="role-btn student-btn">
              <span className="role-icon">🎓</span>
              <span className="role-text">Student</span>
            </button>
            <button className="role-btn lecturer-btn">
              <span className="role-icon">👨‍🏫</span>
              <span className="role-text">Lecturer</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="auth-actions">
          <div className="auth-button-group">
            <button
              className="btn btn-primary auth-btn"
              onClick={() => navigate("/login")}
            >
              <span className="btn-icon">🔐</span>
              <span className="btn-text">Login</span>
            </button>

            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-text">OR</span>
              <span className="divider-line"></span>
            </div>

            <button
              className="btn btn-secondary auth-btn"
              onClick={() => navigate("/signup")}
            >
              <span className="btn-icon">📝</span>
              <span className="btn-text">Create Account</span>
            </button>
          </div>
        </div>

        {/* Quick Demo Access */}
        <div className="demo-access">
          <p className="demo-text">
            <strong>Quick Demo:</strong> Try the system without signing up
          </p>
          <button className="btn btn-demo" onClick={handleDemoLogin}>
            Try Demo Version
          </button>
        </div>

        {/* Footer Links */}
        <div className="auth-footer">
          <p className="footer-text">
            By continuing, you agree to our{" "}
            <a href="/terms" className="footer-link">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="footer-link">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default AuthLandingPage;

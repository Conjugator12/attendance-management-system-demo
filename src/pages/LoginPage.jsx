// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UniversityLogo from "../components/UniversityLogo";
import "../styles/LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo login - always succeeds
    onLogin({
      name: username || (userType === "student" ? "John Doe" : "Dr. Smith"),
      id: userType === "student" ? "STU001" : "LEC001",
      role: userType,
      department: "Computer Science",
      email: `${username || "user"}@kaaf.edu`,
    });
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back
        </button>

        {/* Logo */}
        <div className="login-header">
          <UniversityLogo size="medium" name="" />
          <h2>Login</h2>
          <p>Enter your credentials to continue</p>
        </div>

        {/* User Type Selection */}
        <div className="user-type-selector">
          <button
            className={`type-btn ${userType === "student" ? "active" : ""}`}
            onClick={() => setUserType("student")}
          >
            🎓 Student
          </button>
          <button
            className={`type-btn ${userType === "lecturer" ? "active" : ""}`}
            onClick={() => setUserType("lecturer")}
          >
            👨‍🏫 Lecturer
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username or Email</label>
            <input
              type="text"
              className="input"
              placeholder={`Enter your ${userType} ID`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary login-btn">
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="link">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

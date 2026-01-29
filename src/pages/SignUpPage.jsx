// src/pages/SignUpPage.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UniversityLogo from "../components/UniversityLogo";
import "../styles/SignUpPage.css";

const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: "student",
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    department: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Handle sign up logic
      alert("Account created successfully! (Demo)");
      navigate("/login");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back
        </button>

        {/* Progress Indicator */}
        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
            <span className="step-number">1</span>
            <span className="step-label">Account Type</span>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
            <span className="step-number">2</span>
            <span className="step-label">Details</span>
          </div>
        </div>

        {/* Logo */}
        <div className="signup-header">
          <UniversityLogo size="medium" name="" />
          <h2>Create Your Account</h2>
          <p>Join KAAF Attendance System in {step === 1 ? "2" : "1"} steps</p>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <div className="step-1">
              <h3>Select Account Type</h3>
              <div className="account-type-options">
                <div
                  className={`type-option ${
                    formData.userType === "student" ? "selected" : ""
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, userType: "student" })
                  }
                >
                  <div className="type-icon">🎓</div>
                  <div className="type-content">
                    <h4>Student Account</h4>
                    <p>Attend classes, mark attendance, view schedule</p>
                  </div>
                </div>
                <div
                  className={`type-option ${
                    formData.userType === "lecturer" ? "selected" : ""
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, userType: "lecturer" })
                  }
                >
                  <div className="type-icon">👨‍🏫</div>
                  <div className="type-content">
                    <h4>Lecturer Account</h4>
                    <p>Create sessions, manage attendance, generate reports</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="step-2">
              <h3>Personal Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="input"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="input"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="john.doe@kaaf.edu"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {formData.userType === "student" ? (
                <div className="form-group">
                  <label>Student ID</label>
                  <input
                    type="text"
                    name="studentId"
                    className="input"
                    placeholder="STU2024001"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              ) : (
                <div className="form-group">
                  <label>Staff ID</label>
                  <input
                    type="text"
                    name="studentId"
                    className="input"
                    placeholder="LEC2024001"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label>Department</label>
                <select
                  name="department"
                  className="input"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="cs">Computer Science</option>
                  <option value="it">Information Technology</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="input"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div className="form-footer">
            {step === 1 ? (
              <button type="submit" className="btn btn-primary">
                Continue to Details →
              </button>
            ) : (
              <div className="step-2-buttons">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setStep(1)}
                >
                  ← Back
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Account
                </button>
              </div>
            )}
          </div>
        </form>

        {/* Login Link */}
        <div className="login-link">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

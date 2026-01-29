import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Top sections */}
          <div className="footer-top">
            {/* University Logo + Description */}
            <div className="footer-section">
              <div className="university-logo">UNIVERSITY</div>
              <p>Attendance Management System for educational institutions.</p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <a href="#">Classes</a>
                </li>
                <li>
                  <a href="#">Attendance History</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="footer-section">
              <h3>Support</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="footer-bottom">
            <p>
              &copy; {currentYear} University Attendance System. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

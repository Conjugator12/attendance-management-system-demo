import React from "react";
import "../styles/UniversityLogo.css";
import universityLogo from "../assets/my-logo.png"; // Import and assign to variable

const UniversityLogo = ({ size = "medium", name = "University" }) => {
  const sizeMap = {
    small: { fontSize: "1rem", padding: "0.25rem", imgSize: "24px" },
    medium: { fontSize: "1.5rem", padding: "0.5rem", imgSize: "32px" },
    large: { fontSize: "2rem", padding: "0.75rem", imgSize: "48px" },
  };

  const style = sizeMap[size] || sizeMap.medium;

  return (
    <div className="logo">
      <div className="logo-symbol" style={{ padding: style.padding }}>
        <img
          src={universityLogo} // Use the imported variable
          alt={`${name} logo`}
          style={{ height: style.imgSize, width: "auto" }}
        />
      </div>
      <span className="logo-text" style={{ fontSize: style.fontSize }}>
        {name}
      </span>
    </div>
  );
};

export default UniversityLogo;

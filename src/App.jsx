// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AuthLandingPage from "./pages/AuthLandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Meetings from "./pages/Meetings";
import History from "./pages/History";

import "./styles/App.css";
import "./styles/Global.css";

import PrivateRoute from "./components/PrivateRoute";

// ...

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard user={user} onLogout={handleLogout} />
            </PrivateRoute>
          }
        />
        <Route
          path="/classes"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Classes />
            </PrivateRoute>
          }
        />
        <Route
          path="/meetings"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Meetings />
            </PrivateRoute>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <History />
            </PrivateRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

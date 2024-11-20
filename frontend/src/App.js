// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Properties from "./pages/properties";
import ProtectedRoute from "../src/component/ProtectedRoute"; // Import ProtectedRoute
import { AuthProvider } from '../src/context/AuthContext'; // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Route for Home */}
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          {/* Protected route for Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

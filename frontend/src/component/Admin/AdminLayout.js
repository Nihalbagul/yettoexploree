import React, { useState } from "react";
import Navbar from "./Navbar";
import UploadFile from "./UploadFile";
import AdminHome from "./AdminHome";

function AdminLayout() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "upload":
        return <UploadFile />;
      case "manage":
        return <div style={sectionStyle}>Manage Content (Coming Soon)</div>;
      default:
        return <AdminHome />; // Render AdminHome as the default
    }
  };

  return (
    <div>
      <Navbar onSectionChange={setCurrentSection} />
      <div style={{ padding: "20px" }}>{renderSection()}</div>
    </div>
  );
}

const sectionStyle = {
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
};

export default AdminLayout;
import React from "react";
import logo from "../assets/medexpress-logo-standard.webp";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        <img src={logo} alt="MedExpress Logo" className="h-16" />
      </div>
    </header>
  );
};

export default Header;

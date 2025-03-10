import { useState } from "react";
import "./index.css"; // Import CSS for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">OceanUI</div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      {isOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

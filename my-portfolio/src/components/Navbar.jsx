import React from "react";
import "./Navbar.css";

function Navbar() {
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handlProjectsClick = () => {
    const aboutSection = document.getElementById("projects-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handlSkilsClick = () => {
    const aboutSection = document.getElementById("skils-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={handleAboutClick}>About</button>
          <button onClick={handlProjectsClick}>Projects</button>
          <button onClick={handlSkilsClick}>Skils</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

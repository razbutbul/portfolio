import React from "react";
import "./Sub_navbar.css";

import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import gitlab from "../images/gitlab.png";
import email from "../images/email.png";
import whatsapp from "../images/whatsapp.png";

function SubNavbar() {
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/raz-butbul-07b465259/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleGitHubClick = () => {
    window.open(
      "https://github.com/razbutbul",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleGitLabClick = () => {
    window.open(
      "https://gitlab.com/RazButbul",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleEmailClick = () => {
    window.open("mailto:razbutbul2@gmail.com");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+972525708387", "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="sub-navbar">
      <ul>
        <li>
          <button onClick={handleLinkedInClick}>
            <img src={linkedin} alt="LinkedIn" />
          </button>
        </li>
        <li>
          <button onClick={handleGitHubClick}>
            <img src={github} alt="GitHub" />
          </button>
        </li>
        <li>
          <button onClick={handleGitLabClick}>
            <img src={gitlab} alt="GitLab" />
          </button>
        </li>
        <li>
          <button onClick={handleEmailClick}>
            <img src={email} alt="Email" />
          </button>
        </li>
        <li>
          <button onClick={handleWhatsAppClick}>
            <img src={whatsapp} alt="WhatsApp" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default SubNavbar;

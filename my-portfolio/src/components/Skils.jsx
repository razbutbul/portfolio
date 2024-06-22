import React from "react";
import "./Skils.css";
import javaImg from "../images/java.png";
import jsImg from "../images/js.png";
import pythonImg from "../images/python.png";
import cppImg from "../images/c++.png";
import csharpImg from "../images/c-sharp.png";
import unityImg from "../images/unity.png";
import djangoImg from "../images/django.png";
import mysqlImg from "../images/mysql.png";
import reactImg from "../images/react.png";
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import nodejsImg from "../images/nodejs.png";

function Skils() {
  return (
    <section id="skils-section">
      <br />
      <br />
      <h2>Skills Section</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <img src={javaImg} alt="Java" />
          <p>Java</p>
        </div>
        <div className="skill-item">
          <img src={jsImg} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src={pythonImg} alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <img src={cppImg} alt="C++" />
          <p>C++</p>
        </div>
        <div className="skill-item">
          <img src={csharpImg} alt="C#" />
          <p>C#</p>
        </div>
        <div className="skill-item">
          <img src={unityImg} alt="Unity" />
          <p>Unity</p>
        </div>
        <div className="skill-item">
          <img src={djangoImg} alt="Django" />
          <p>Django</p>
        </div>
        <div className="skill-item">
          <img src={mysqlImg} alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div className="skill-item">
          <img src={reactImg} alt="React" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <img src={htmlImg} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img src={cssImg} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img src={nodejsImg} alt="Node.js" />
          <p>Node.js</p>
        </div>
      </div>
    </section>
  );
}

export default Skils;

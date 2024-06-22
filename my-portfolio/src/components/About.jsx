import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about-section">
      <br />
      <br />
      <h2>About Me</h2>
      <div>
        <ul className="AboutList">
          <li>3rd year Computer Science student at Sapir Academic College.</li>
          <li>
            Highly motivated, hard worker, and looking for my next challenge.
          </li>

          <li>Strong problem-solving and algorithmic skills.</li>
          <li>
            Passionate about open-source contributions and community engagement.
          </li>

          <li>Fluent in English and Hebrew.</li>
          <li>
            Hobbies include playing the guitar, piano, trumpet and other musical
            instruments.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skils from "./components/Skils";
import SubNavbar from "./components/Sub_navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">
        Hi, I'm Raz Butbul
        <br />
        Enthusiastic Computer Science Student
      </h1>

      <img
        className="Profile-photo"
        src="src/images/profile.jpeg"
        alt="Profile"
      />
      <SubNavbar />
      <Navbar />
      <About />
      <Skils />
      <Projects />
    </div>
  );
}

export default App;

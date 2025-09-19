import React from "react";
import '../App.css';
import aboutMovie from '../assets/about_mov.mp4'

const About = () => {
  return (
  <div className="catalog">
    <div className="about-mov">
      <video src={aboutMovie} autoPlay loop muted preload="auto" playsInline></video>
    </div>
    <h2>CATALOG</h2>
    <img src="https://pbs.twimg.com/media/E1lHED-UYAEnAz0?format=jpg&name=large" alt="잡지" />
  </div>
);
};

export default About;

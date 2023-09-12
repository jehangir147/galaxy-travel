import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

import earth from "../assets/earth.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={earth} type="video/mp4"></source>
      </video>
      <div className="content">
        <h1>Galaxy. Travell</h1>
        <p>Worlds First civilian space travel.</p>
        <div>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn btn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;

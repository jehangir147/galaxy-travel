import React from "react";
import "./Training.css";
import moon from "../assets/moon.jpg";
import pod from "../assets/pod.jpg";

import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet adipisci
          quis consectetur praesentium, minima nisi nam qui iste deleniti eos.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={moon} className="img" alt="" />
          </div>
          <div className="img-stack bottom">
            <img src={pod} className="img" alt="" />
          </div>
        </div>
        <div className="img-stack button"></div>
      </div>
    </div>
  );
};

export default Training;

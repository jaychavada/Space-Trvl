import React from "react";
import "../Styles/TrainingStyle.css";
import { Link } from "react-router-dom";
import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon-man.jpg";

const TrainingData = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Through Training is important when traveling in space. We offer all
          inclusive training for pre-flight and in-flight scenarios.
        </p>
        <Link to='/contact'><button className="btn">Contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="image-stack top">
                <img src={Moon} className="img" alt=""/>
            </div>
            <div className="image-stack bottom">
                <img src={Pod} className="img" alt=""/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingData;

import React from "react";
import { Application } from "@splinetool/runtime";
import { useEffect } from "react";
import "./Work.css";
import { useNavigate } from "react-router-dom";

function Work() {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/nbr0tvL-L0qJg2H7/scene.splinecode");
  }, []);
  const navigate = useNavigate();
  return (
    <section className="work-container">
      <div className="picture-content-">
        <canvas id="canvas3d"></canvas>
      </div>
      <div className="text-content">
        <h2>
          Hi, I'm Soren, a Health-Tech engineer <br />
          with a passion for software development
        </h2>
        <p>Graduated from AU</p>
      </div>
      <div className="btn-cv-container">
        <button className="btn" onClick={() => window.open("/Resume.pdf")}>
          CV
        </button>
      </div>
      <div className="btn-contact-container">
        <button
          className="btn"
          // When you click on the button ut should take you to the contact page
          onClick={() => navigate("/Contact")}
        >
          Contact info
        </button>
      </div>
    </section>
  );
}

export default Work;

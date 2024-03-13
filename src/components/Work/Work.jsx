import React from "react";
import { Application } from "@splinetool/runtime";
import { useEffect } from "react";

function Work() {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/nbr0tvL-L0qJg2H7/scene.splinecode");
  }, []);
  return (
    <section className="work-container">
      <div className="work-content">
        <h2>
          Hi, I'm Soren, a Health-Tech engineering <br />
          with a passion for software development
        </h2>
        <p>Graduated from AU</p>
      </div>
      <canvas id="canvas3d"></canvas>
    </section>
  );
}

export default Work;

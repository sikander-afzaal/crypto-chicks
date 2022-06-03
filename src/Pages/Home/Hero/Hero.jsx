import React from "react";
import "./Hero.css";
import gif from "../../../Assets/gif.gif";
import { Fade } from "react-awesome-reveal";
function Hero() {
  return (
    <div className="hero">
      <Fade triggerOnce direction="left" duration={800} delay={200}>
        <div className="right__hero">
          <img src={gif} alt="" />
        </div>
      </Fade>
      <Fade triggerOnce direction="right" duration={500} delay={700}>
        <div className="left__hero">
          <h1 className="futura">
            CRYPTO CHICKS <span className="lulu-bold">10K.</span>
          </h1>
          <p className="futura">
            Generative art collection featuring women of diverse backgrounds
            with a wide selection of colorful, fun attributes.
          </p>
          <button className="view lulu-bold">View on opensea</button>
        </div>
      </Fade>
    </div>
  );
}

export default Hero;

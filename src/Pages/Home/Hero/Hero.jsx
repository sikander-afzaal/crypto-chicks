import React from "react";
import "./Hero.css";
import gif from "../../../Assets/gif.gif";
function Hero() {
  return (
    <div className="hero">
      <div className="left__hero">
        <h1 className="futura">
          CRYPTO CHICKS <span className="lulu-bold">10K.</span>
        </h1>
        <p className="futura">
          Generative art collection featuring women of diverse backgrounds with
          a wide selection of colorful, fun attributes.
        </p>
        <button className="view lulu-bold">View on opensea</button>
      </div>
      <div className="right__hero">
        <img src={gif} alt="" />
      </div>
    </div>
  );
}

export default Hero;

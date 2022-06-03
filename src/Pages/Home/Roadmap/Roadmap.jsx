import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Roadmap.css";
function Roadmap() {
  return (
    <div id="road" className="roadmap">
      <Fade triggerOnce direction="down" duration={500} delay={200}>
        <h2 className="kanit section-heading">ROADMAP</h2>
      </Fade>

      <div className="roadmap-grid">
        <div className="line"></div>
        <Fade triggerOnce duration={1500} delay={200} cascade direction="down">
          <div className="road-div div1">
            <h2 className="kanit">Phase 1: Lorem, ipsum dolor.</h2>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </p>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.Lorem, ipsum dolor.
            </p>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </p>
          </div>
          <div className="road-div div2">
            <h2 className="kanit">Phase 1: Lorem, ipsum dolor.</h2>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </p>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.Lorem, ipsum dolor.
            </p>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </p>
          </div>
          <div className="road-div div3">
            <h2 className="kanit">Phase 1: Lorem, ipsum dolor.</h2>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </p>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.Lorem, ipsum dolor.
            </p>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </p>
          </div>
          <div className="road-div div4">
            <h2 className="kanit">Phase 1: Lorem, ipsum dolor.</h2>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </p>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.Lorem, ipsum dolor.
            </p>
            <p className="futura">
              - Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Roadmap;

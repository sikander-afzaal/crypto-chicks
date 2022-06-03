import React from "react";
import "./HomeIndex.css";
import Hero from "./Hero/Hero";
import Team from "./Team/Team";
import Roadmap from "../Roadmap/Roadmap";
function Index() {
  return (
    <div className="index-cont">
      <div className="home-index">
        <Hero />
        <Team />
        <Roadmap />
      </div>
    </div>
  );
}

export default Index;

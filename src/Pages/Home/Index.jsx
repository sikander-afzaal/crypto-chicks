import React from "react";
import "./HomeIndex.css";
import Hero from "./Hero/Hero";
import Team from "./Team/Team";
import Roadmap from "../Roadmap/Roadmap";
import bg from "../../Assets/cool-background.svg";
function Index() {
  return (
    <div className="index-cont">
      <img src={bg} alt="" className="bg" />
      <div className="home-index">
        <Hero />
        <Team />
        <Roadmap />
      </div>
    </div>
  );
}

export default Index;

import React from "react";
import "./HomeIndex.css";
import Hero from "./Hero/Hero";
import Team from "./Team/Team";
import Roadmap from "../Roadmap/Roadmap";
function Index() {
  return (
    <div className="home-index">
      <Hero />
      <Team />
      <Roadmap />
    </div>
  );
}

export default Index;

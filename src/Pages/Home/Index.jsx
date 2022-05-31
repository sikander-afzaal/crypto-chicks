import React from "react";
import "./HomeIndex.css";
import Hero from "./Hero/Hero";
import Team from "./Team/Team";
function Index() {
  return (
    <div className="home-index">
      <Hero />
      <Team />
    </div>
  );
}

export default Index;

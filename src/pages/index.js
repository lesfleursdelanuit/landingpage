import * as React from "react";
import AnimatedText from "../components/AnimatedText/AnimatedText.js";
import ShootingStars from "../components/ShootingStars/ShootingStars.js";
import "./style.scss";

// markup
const IndexPage = () => {
  return (
    <main>
      <div className="App">
        <div className="gradient"></div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <AnimatedText />
        <ShootingStars />
      </div>
    </main>
  );
};

export default IndexPage;

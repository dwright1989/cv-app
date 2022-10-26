import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Education from "./Education";
import Experience from "./Experience";

const RightPanel = () => {
  return (
    <div id="rightPanel">
        <Header />
        <Intro />
        <Education />
        <Experience />
    </div>
  );
};

export default RightPanel;
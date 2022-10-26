import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Education from "./Education";

const RightPanel = () => {
  return (
    <div id="rightPanel">
        <Header />
        <Intro />
        <Education />
    </div>
  );
};

export default RightPanel;
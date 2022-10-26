import React from "react";
import Details from "./Details";
import Socials from "./Socials";
import Skills from "./Skills";


const LeftPanel = () => {
  return (
    <div id="leftPanel">
        <Socials />
        <Details />
        <Skills />
    </div>
  );
};

export default LeftPanel;
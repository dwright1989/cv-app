import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Education from "./Education";
import Experience from "./Experience";

const RightPanel = (props) => {
  return (
    <div id="rightPanel">
        <Header preview={props.preview}/>
        <Intro preview={props.preview}/>
        <Education preview={props.preview}/>
        <Experience preview={props.preview}/>
    </div>
  );
};

export default RightPanel;
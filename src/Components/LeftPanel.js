import React from "react";
import Details from "./Details";
import Socials from "./Socials";
import Skills from "./Skills";


const LeftPanel = (props) => {
  return (
    <div id="leftPanel">
        <Socials preview={props.preview}/>
        <Details preview={props.preview}/>
        <Skills preview={props.preview}/>
    </div>
  );
};

export default LeftPanel;
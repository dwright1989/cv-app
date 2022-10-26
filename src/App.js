
import React from "react";
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";
import "./Styles/App.css";


const App = () => {
  return (
    <div id="content">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default App;

import React from "react";
import Header from "./Components/Header";
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";
import "./Styles/App.css";


const App = () => {
  return (
    <div id="content">
      <Header />
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default App;
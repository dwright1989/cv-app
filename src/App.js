
import React from "react";
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";
import GeneratePDF from "./Components/GeneratePDF";
import "./Styles/App.css";




const App = () => {
  const [previewMode, setPreviewMode] = React.useState({
    preview: false
 })

 function preview(prev){
        setPreviewMode({preview: !previewMode.preview})
 }

 async function exportToPDF(){
    await setPreviewMode({preview: true});
    GeneratePDF();
 }
  return (
    <div id="container">
      <div id="instructions">
        <h1 id="cvCreatorHeading">CV Creator</h1>
        <p id="cvCreatorPara">Welcome to the CV creator.  Each section is editable using the pencil icon (or + icon to add additional information). Once completed, you can preview the CV and/or export it to a PDF using the buttons below.</p>
        <button onClick={exportToPDF} type="button" id="exportPDFButton">Export PDF</button>
        <button onClick={preview} type="button" id="previewModeButton">{(previewMode.preview) ? "Edit Mode" : "Preview Mode"}</button> 
      </div>
      <div id="content">
            <LeftPanel preview={previewMode.preview}/>
            <RightPanel  preview={previewMode.preview}/>
           </div>
    </div>
  
  );
};





export default App;
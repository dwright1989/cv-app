
import React from "react";
import editIcon from '../Icons/edit.png';


export default function Intro() {
    const [intro, setIntro] = React.useState({
       description: "",
       previewDisplay: true
    })

    function handleChange(event){
        const{name, value} = event.target;
        setIntro(prevIntro => ({
            ...prevIntro,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIntro(prevIntro => ({
            ...prevIntro,
            previewDisplay: true
        }))
    }
    
    function handleEdit(){
        setIntro(prevIntro => ({
            ...prevIntro,
            previewDisplay: false
        }))
    }



        return (
            
            <div id="intro">
                {!intro.previewDisplay && <form id="introForm" className ="form" onSubmit={handleSubmit}>
                   Intro: <textarea id="descriptionTextArea"
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={intro.description}
                    />
                    <button className="form-submit updateButton" id="updateInfoButton">Update</button>
                </form>}
                {intro.previewDisplay && 
                        <div id="introDiv">
                                <div id="introHeadingDiv">
                                    <h2 id="introHeading" className="underline">Intro</h2>
                                    <img src={editIcon} alt="Edit" className="editButton" id="editIntroButton" onClick={handleEdit}/>
                                </div>
                                <p id="description">{(intro.description) ?  intro.description : "This is where you'll put information about yourself, an introduction about background etc."}</p>
                        </div>}
            </div>
        );
    

}


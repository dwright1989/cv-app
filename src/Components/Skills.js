
import React from "react";
import uniqid from "uniqid";
import addIcon from '../Icons/add.png';
import deleteIcon from '../Icons/delete.png';



export default function Skills() {
    const [skills, setSkills] = React.useState({
        skill: {text: "", id: uniqid()},
        skills: [],
        previewDisplay: true
    })


    function handleAdd(){
        setSkills(prevSkills => ({
            ...prevSkills,
            previewDisplay: false
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        setSkills(prevSkills => ({
            skills: prevSkills.skills.concat(prevSkills.skill),
            skill: {text: "", id: uniqid()},
            previewDisplay: true
        }))
    }
    

    function handleChange(event){
        setSkills(prevSkills => ({
            ...prevSkills,
            skill:{
                text: event.target.value,
                id: prevSkills.skill.id
            }
        }))
    }

    function handleDelete(event){
        let skillId = event.target.id;
        setSkills(prevSkills => ({
            ...prevSkills,
            skills: prevSkills.skills.filter(skill => skill.id !== skillId)
        }))
    }
     
    return (
            
            <div id="skills">
                <div id="skillsHeadingDiv">
                    <h2>SKILLS</h2>
                    <img src={addIcon} alt="Add" className="addButton" id="addSkillButton" onClick={handleAdd}/>
                </div>
                {skills.skills && 
                    <div id="skillItems">
                        <ul>
                            {skills.skills.map((skill)=>{
                                return <li key={skill.id}>{skill.text} <img src={deleteIcon} alt="Delete" className="deleteButton" id={skill.id} onClick={handleDelete}/></li>
                                
                            })}
                        </ul>
                    </div>
                }
                {!skills.previewDisplay && 
                        <form id="skillsForm" className ="form" onSubmit={handleSubmit}>
                            <input id="skillInput"
                                type="text"
                                name="skill"
                                onChange={handleChange}
                                value={skills.skill.text}
                            />
                            <button className="form-submit addButton" id="addSkillItemButton">Add</button>
                        </form>
                }

            </div>
        );
    

}


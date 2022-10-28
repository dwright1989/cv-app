
import React from "react";
import uniqid from "uniqid";
import addIcon from '../Icons/add.png';
import deleteIcon from '../Icons/delete.png';



export default function Experience(props) {
    const [experience, setExperience] = React.useState({
        work: {
            id: uniqid(),
            company: "",
            title: "",
            dateFrom: "",
            dateTo: "",
            responsibility: ""
        },
        experiences: [],
        previewDisplay: true
    })


    function handleAdd(){
        setExperience(prevExperience => ({
            ...prevExperience,
            previewDisplay: false
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        setExperience(prevExperience => ({
            experiences: prevExperience.experiences.concat(prevExperience.work),
            work: {
                id: uniqid(),
                company: "",
                title: "",
                dateFrom: "",
                dateTo: "",
                responsibility: ""
            },
            previewDisplay: true
        }))
    }
    

    function handleChange(event){
        const{name, value} = event.target;
        setExperience(prevExperience => ({
            ...prevExperience,
            work:{
                ...prevExperience.work,
                [name]: value
            }
        }))
    }

    function handleDelete(event){
        let workId = event.target.id;
        setExperience(prevExperience => ({
            ...prevExperience,
            experiences: prevExperience.experiences.filter(work => work.id !== workId)
        }))
    }
     
    return (
            
            <div id="experiences">
                <div id="experiencesHeadingDiv">
                    <h2 className="underline">Experience</h2>
                    {!props.preview &&  <img src={addIcon} alt="Add" className="addButton" id="addExperienceButton" onClick={handleAdd}/>}
                </div>
                {(experience.experiences || props.preview) && 
                    <div id="experienceItems">
                            {experience.experiences.map((work)=>{
                                return <div className="experienceItemDiv" key={work.id}>{
                                }<p>Company: </p><p className="italics">{work.company}</p>
                                {!props.preview &&  <img src={deleteIcon} alt="Delete" className="deleteButton" id={work.id} onClick={handleDelete}/>}
                                {props.preview && <p></p>}
                                <p>Title: </p><p className="workItem italics">{work.title}</p>
                                <p>Date from: </p><p className="workItem italics">{work.dateFrom}</p>
                                <p>Date to: </p><p className="workItem italics">{work.dateTo}</p>
                                <p>Responsibilities: </p><p className="workItem italics">{work.responsibility}</p>
                                <hr/>
                           </div>
                                
                            })}
                    </div>
                }
                {(!experience.previewDisplay && !props.preview) &&
                        <form id="experienceForm" className ="form" onSubmit={handleSubmit}>
                            Company: <input id="editCompanyField"
                                type="text"
                                name="company"
                                onChange={handleChange}
                                value={experience.work.company} required
                            />
                            Title: <input id="editTitleField"
                                type="text"
                                name="title"
                                onChange={handleChange}
                                value={experience.work.title} required
                            />
                             Date from: <input id="editDateFromField"
                                type="date"
                                name="dateFrom"
                                onChange={handleChange}
                                value={experience.work.dateFrom} required
                            />
                            Date to: <input id="editDateToField"
                                type="date"
                                name="dateTo"
                                onChange={handleChange}
                                value={experience.work.dateTo} required
                            />
                            Responsibilities: <textarea id="editResponsibilityField"
                                type="text"
                                name="responsibility"
                                onChange={handleChange}
                                value={experience.work.responsibility} required
                            />
                            <button className="form-submit" id="addExperienceItemButton">Add</button>
                        </form>
                }

            </div>
        );
    

}


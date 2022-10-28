
import React from "react";
import uniqid from "uniqid";
import addIcon from '../Icons/add.png';
import deleteIcon from '../Icons/delete.png';



export default function Education(props) {
    const [education, setEducation] = React.useState({
        ed: {
            id: uniqid(),
            school: "",
            qualification: "",
            grade: "",
            dateAchieved: ""
        },
        educations: [],
        previewDisplay: true
    })


    function handleAdd(){
        setEducation(prevEducation => ({
            ...prevEducation,
            previewDisplay: false
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        setEducation(prevEducation => ({
            educations: prevEducation.educations.concat(prevEducation.ed),
            ed: {
                id: uniqid(),
                school: "",
                qualification: "",
                grade: "",
                dateAchieved: ""
            },
            previewDisplay: true
        }))
    }
    

    function handleChange(event){
        const{name, value} = event.target;
        setEducation(prevEducation => ({
            ...prevEducation,
            ed:{
                ...prevEducation.ed,
                [name]: value
            }
        }))
    }

    function handleDelete(event){
        let educationId = event.target.id;
        setEducation(prevEducation => ({
            ...prevEducation,
            educations: prevEducation.educations.filter(ed => ed.id !== educationId)
        }))
    }
     
    return (
            
            <div id="educations">
                <div id="educationsHeadingDiv">
                    <h2 className="underline">Education</h2>
                    {!props.preview && <img src={addIcon} alt="Add" className="addButton" id="addEducationButton" onClick={handleAdd}/>}
                </div>
                {(education.educations || props.preview) &&
                    <div id="educationItems">
                            {education.educations.map((ed)=>{
                                return <div className="educationItemDiv" key={ed.id}>{
                                }<p>School: </p><p className="italics">{ed.school}</p>
                                 <img src={deleteIcon} alt="Delete" className="deleteButton" id={ed.id} onClick={handleDelete}/>
                                <p>Qualification: </p><p className="edItem italics">{ed.qualification}</p>
                                <p>Grade: </p><p className="edItem italics">{ed.grade}</p>
                                <p>Date Achieved: </p><p className="edItem italics">{ed.dateAchieved}</p>
                                <hr/>
                           </div>
                                
                            })}
                    </div>
                }
                {(!education.previewDisplay && !props.preview) &&
                        <form id="educationForm" className ="form" onSubmit={handleSubmit}>
                            School/College: <input id="editSchoolField"
                                type="text"
                                name="school"
                                onChange={handleChange}
                                value={education.ed.school} required
                            />
                            Qualification: <input id="editQualificationField"
                                type="text"
                                name="qualification"
                                onChange={handleChange}
                                value={education.ed.qualification} required
                            />
                            Grade: <input id="editGradeField"
                                type="text"
                                name="grade"
                                onChange={handleChange}
                                value={education.ed.grade} required
                            />
                             Year Achieved: <input id="editYearField"
                                type="date"
                                name="dateAchieved"
                                onChange={handleChange}
                                value={education.ed.dateAchieved} required
                            />
                            <button className="form-submit" id="addEducationItemButton">Add</button>
                        </form>
                }

            </div>
        );
    

}


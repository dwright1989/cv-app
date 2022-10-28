
import React from "react";
import Name from "./Name";
import editIcon from '../Icons/edit.png';

export default function Header(props) {
    const [fullName, setFullName] = React.useState({
       firstName: "Joe",
       lastName: "Bloggs",
       previewDisplay: true
    })

    function handleChange(event){
        const{name, value} = event.target;
        setFullName(prevFullName => ({
            ...prevFullName,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFullName(prevFullName => ({
            ...prevFullName,
            previewDisplay: true
        }))
    }
    
    function handleEdit(){
        setFullName(prevFullName => ({
            ...prevFullName,
            previewDisplay: false
        }))
    }


        return (
            
            <div id="header">
                {(!fullName.previewDisplay && !props.preview) && <form id="nameForm" className ="form" onSubmit={handleSubmit}>
                   First name: <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange}
                        value={fullName.firstName}
                    />
                    Last name: <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        value={fullName.lastName}
                    />
                    <button className="form-submit updateButton">Update</button>
                </form>}
                {(fullName.previewDisplay || props.preview) &&
                        <div id="fullNameDiv">
                            {!props.preview &&
                                <img src={editIcon} alt="Edit" className="editButton" id="editHeaderButton" onClick={handleEdit}/>}
                                <Name fullName={fullName}/> 
                        </div>}
            </div>
        );
    

}



import React from "react";
import Name from "./Name";

export default function Header() {
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
                {!fullName.previewDisplay && <form className="form" onSubmit={handleSubmit}>
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
                    <button className="form-submit" id="updateButton">Update</button>
                </form>}
                {fullName.previewDisplay && 
                        <div id="fullNameDiv">
                                <button  id="editButton" onClick={handleEdit}>Edit</button> 
                                <Name fullName={fullName} /> 
                        </div>}
            </div>
        );
    

}


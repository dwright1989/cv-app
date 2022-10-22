
import React from "react";
import Name from "./Name";

export default function Header() {
    const [fullName, setFullName] = React.useState({
       firstName: "",
       lastName: ""
    })

    function handleChange(event){
        const{name, value} = event.target;
        setFullName(prevFullName => ({
            ...prevFullName,
            [name]: value
        }))

        
    }

    function handleSubmit(event) {
        event.preventDefault()
        
    }
    
        return (
            <div id="header">
                <form className="form" onSubmit={handleSubmit}>
                   <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange}
                        value={fullName.firstName}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        value={fullName.lastName}
                    />
                    <button className="form-submit">Update</button>
                </form>
                <Name fullName={fullName}/>
            </div>
        )
    

}

